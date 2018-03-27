import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';
import { of }         from 'rxjs/observable/of';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { Face } from 'face';
import { FaceService } from 'face.service';

@Component({
  selector: 'face-search',
  templateUrl: './face-search.component.html',
  styleUrls: [ './face-search.component.css' ]
})
export class FaceSearchComponent implements OnInit {
  faces$: Observable<Face[]>;
  private searchTerms = new Subject<string>();

  constructor(private faceService: FaceService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.faces$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.faceService.searchFaces(term)),
    );
  }
}

