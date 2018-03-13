import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import { Emotion } from 'emotion';
import { EmotionService } from 'emotion.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  emotions: Emotion[] = [];

  constructor(private emotionService: EmotionService) { }

  ngOnInit() {
    this.getEmotions();
  }

  bikeImage = document.getElementById("clip") as HTMLImageElement;


  getEmotions(): void {
  console.log("hfhf");
    this.emotionService.getEmotions().subscribe(emotions => this.emotions = emotions.slice(1, 9));
  }


}


