import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Image } from 'image';
import { MessageService } from 'message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ImageService {

  private imagesUrl = 'api/images';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  // GET images from the server *
  getImages (): Observable<Image[]> {
    return this.http.get<Image[]>(this.imagesUrl)
      .pipe(
        tap(images => this.log(`fetched images`)),
        catchError(this.handleError('getImages', []))
      );
  }
/*

  getImages(): Promise<Image[]> {

    console.log("getHeroes method");

      return this.http.get(this.imagesUrl)
        .toPromise()
        .then(response => response.json().data as Image[])
        .catch(this.handleError);
  }*/
  /** GET hero by id. Return `undefined` when id not found */
  getImageNo404<Data>(id: number): Observable<Image> {
    const url = `${this.imagesUrl}/?id=${id}`;
    return this.http.get<Image[]>(url)
      .pipe(
        map(images => images[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} image id=${id}`);
        }),
        catchError(this.handleError<Image>(`getImage id=${id}`))
      );
  }

  /** GET hero by id. Will 404 if id not found */
  getImage(id: number): Observable<Image> {
    const url = `${this.imagesUrl}/${id}`;
    return this.http.get<Image>(url).pipe(
      tap(_ => this.log(`fetched image id=${id}`)),
      catchError(this.handleError<Image>(`getImage id=${id}`))
    );
  }

  /* GET heroes whose name contains search term */
  searchImages(term: string): Observable<Image[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Image[]>(`api/images/?name=${term}`).pipe(
      tap(_ => this.log(`found images matching "${term}"`)),
      catchError(this.handleError<Image[]>('searchImages', []))
    );
  }

  //////// Save methods //////////

  /** POST: add a new hero to the server */
  addImage (image: Image): Observable<Image> {
    return this.http.post<Image>(this.imagesUrl, image, httpOptions).pipe(
      tap((image: Image) => this.log(`added image w/ id=${image.id}`)),
      catchError(this.handleError<Image>('addImage'))
    );
  }

  /** DELETE: delete the hero from the server */
  deleteImage (image: Image | number): Observable<Image> {
    const id = typeof image === 'number' ? image : image.id;
    const url = `${this.imagesUrl}/${id}`;

    return this.http.delete<Image>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted image id=${id}`)),
      catchError(this.handleError<Image>('deleteImage'))
    );
  }

  /** PUT: update the hero on the server */
  updateImage (image: Image): Observable<any> {
    return this.http.put(this.imagesUrl, image, httpOptions).pipe(
      tap(_ => this.log(`updated image id=${image.id}`)),
      catchError(this.handleError<any>('updateImage'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a ImageService message with the MessageService */
  private log(message: string) {
    this.messageService.add('ImageService: ' + message);
  }
}
