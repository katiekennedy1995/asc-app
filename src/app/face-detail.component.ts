import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Face }         from 'face';
import { FaceService }  from 'face.service';

@Component({
  selector: 'face-detail',
  templateUrl: './face-detail.component.html',
  styleUrls: [ './face-detail.component.css' ]
})
export class FaceDetailComponent implements OnInit {
  @Input() face: Face;

  constructor(
    private route: ActivatedRoute,
    private faceService: FaceService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getFace();
  }

  getFace(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.faceService.getFace(id)
      .subscribe(face => this.face = face);
  }

  goBack(): void {
    this.location.back();
  }


 save(): void {
    this.faceService.updateFace(this.face)
      .subscribe(() => this.goBack());
  }
}

