import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Face } from 'face';
import { MessageService } from 'message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class FaceService {

  private facesUrl = 'api/faces';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  // GET faces from the server *
  getFaces (): Observable<Face[]> {
    return this.http.get<Face[]>(this.facesUrl)
      .pipe(
        tap(faces => this.log(`fetched faces`)),
        catchError(this.handleError('getFaces', []))
      );
  }
/*

  getFaces(): Promise<Face[]> {

    console.log("getHeroes method");

      return this.http.get(this.facesUrl)
        .toPromise()
        .then(response => response.json().data as Face[])
        .catch(this.handleError);
  }*/
  /** GET hero by id. Return `undefined` when id not found */
  getFaceNo404<Data>(id: number): Observable<Face> {
    const url = `${this.facesUrl}/?id=${id}`;
    return this.http.get<Face[]>(url)
      .pipe(
        map(faces => faces[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} face id=${id}`);
        }),
        catchError(this.handleError<Face>(`getFace id=${id}`))
      );
  }

  /** GET hero by id. Will 404 if id not found */
  getFace(id: number): Observable<Face> {
    const url = `${this.facesUrl}/${id}`;
    return this.http.get<Face>(url).pipe(
      tap(_ => this.log(`fetched face id=${id}`)),
      catchError(this.handleError<Face>(`getFace id=${id}`))
    );
  }

  /* GET heroes whose name contains search term */
  searchFaces(term: string): Observable<Face[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Face[]>(`api/faces/?name=${term}`).pipe(
      tap(_ => this.log(`found faces matching "${term}"`)),
      catchError(this.handleError<Face[]>('searchFaces', []))
    );
  }

  //////// Save methods //////////

  /** POST: add a new hero to the server */
  addFace (face: Face): Observable<Face> {
    return this.http.post<Face>(this.facesUrl, face, httpOptions).pipe(
      tap((face: Face) => this.log(`added face w/ id=${face.id}`)),
      catchError(this.handleError<Face>('addFace'))
    );
  }

  /** DELETE: delete the hero from the server */
  deleteFace (face: Face | number): Observable<Face> {
    const id = typeof face === 'number' ? face : face.id;
    const url = `${this.facesUrl}/${id}`;

    return this.http.delete<Face>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted face id=${id}`)),
      catchError(this.handleError<Face>('deleteFace'))
    );
  }

  /** PUT: update the hero on the server */
  updateFace (face: Face): Observable<any> {
    return this.http.put(this.facesUrl, face, httpOptions).pipe(
      tap(_ => this.log(`updated face id=${face.id}`)),
      catchError(this.handleError<any>('updateFace'))
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

  /** Log a FaceService message with the MessageService */
  private log(message: string) {
    this.messageService.add('FaceService: ' + message);
  }
}
