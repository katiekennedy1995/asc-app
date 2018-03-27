
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Image } from 'image';
import { ImageService } from 'image.service';




@Component({
  selector: 'image',
  templateUrl: './image.component.html'
})
export class ImageComponent implements OnInit{
 images: Image[] = [];


constructor(private image: string, private image2: string) {}  ngOnInit(){
    
  
  new Image();
  
  }
}



  /*
imgArray=[0] = new Image();
imgArray=[0].src = '../../assets/mood.jpg';

imgArray=[1] = new Image();
imgArray=[1].src = '../../assets/mood.jpg';

/* ... more images ... 

imgArray=[2] = new Image();
imgArray=[2].src = '../../assets/mood.jpg';

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
