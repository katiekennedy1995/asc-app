import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import { Emotion } from 'emotion';
import { EmotionService } from 'emotion.service';
import { FaceService } from 'face.service';
import { Face } from 'face';


@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  emotions: Emotion[] = [];
  faces: Face[] = [];
  facesArray = [];

  constructor(private emotionService: EmotionService, private faceService: FaceService) { }
  
  ngOnInit() {
    this.getEmotions();
   // console.log("GetEmotions::" , this.getEmotions()); //un
    this.getFaces();
    console.log(this.faces);

}
    //if clicked, game starts
    show: boolean = true;

    //using these methods just to check if button click is sending somewhere( opens alert box)
    submitFace(event, f: number){
    console.log("submit face",f);
    alert('Open: ' + f);
    }

    submitEmotion(event, e: number){
    //console.log("Random number: " Math.floor(Math.random() * 9) + "emotion: " + e);//would like that only 1 random face appeared each time
    console.log("submitEmotion", e)
    alert('Open: ' + e);
   //if (emotion == face ){
    //alert('win: ' + e);
    // if (emotion != face ){
    //alert('win: ' + face);
   // }
   // }
    }
     

    checkEmotion(event, face: number, emotion: number){
    if (face == emotion){
      alert('success'+ face + emotion)
      console.log('success'+ face + emotion)

    }

    }
   //  this.emotions =  this.emotionService.getEmotions().filter(x => x.id == this.emotionId)[0];
 

  //getMAtch(): void{
  //var matches_array = this.emotionService.getEmotions().match(this.faces)
  //console.log(matches_array);




  //will be images, want one to appear in each itteration 
 getFaces(): void {
  console.log('in getFaces method');
  //var tempfaces = [];

  this.faceService.getFaces().subscribe(faces => {
    console.log(' - subscribing')
    console.log(' - faces', faces);
    this.facesArray = faces;

    const slice = faces.slice(0, 5);

    console.log(' - slice', slice);

    this.faces = slice;

  });

  console.log("lfdsjlfjdslkflksdjflkjsdjldsjflsdjf");
  console.log(this.facesArray);

}
    //want all to appear in each itteration
 getEmotions(): void {
  console.log('in getEmotions method');

  this.emotionService.getEmotions().subscribe(emotions => {
    console.log(' - subscribing')
    console.log(' - emotions', emotions);

    const slice = emotions.slice(0, 5);

    console.log(' - slice', slice);

    this.emotions = slice;
  });
}

  // Get Random face from the array of faces
  getRandomFace(): void{
    console.log("Getting random face here");

    
    console.log(this.faces);
  }
  /*
 nextImage(element: string){
   img = document.getElementById(element);

    for( i = 0; i < imgArray.length;i++)
    {
        if(imgArray[i].src == img.src) // << check this
        {
            if(i === imgArray.length){
                document.getElementById(element).src = imgArray[0].src;
                break;
            }
            document.getElementById(element).src = imgArray[i+1].src;
            break;
        }
    }
}
*/

} //end bracket
