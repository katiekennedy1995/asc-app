import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Face } from 'face';
import { FaceService } from 'face.service';


@Component({
  selector: 'faces',
  templateUrl: './faces.component.html',
  styleUrls: ['./faces.component.css']
})
export class FacesComponent implements OnInit {
  faces: Face[];

  constructor(private faceService: FaceService) { }

  ngOnInit() {
    this.getFaces();
  }

  getFaces(): void {
    this.faceService.getFaces()
    .subscribe(faces => this.faces = faces);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.faceService.addFace({ name } as Face)
      .subscribe(face => {
        this.faces.push(face);
      });
  }

  delete(face: Face): void {
    this.faces = this.faces.filter(h => h !== face);
    this.faceService.deleteFace(face).subscribe();
  }

}

