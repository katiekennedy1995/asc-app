import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
 
  createDb() {

    //will be images which ID should match emotions
    const faces = [
      { id: 11, name: 'HAPPY1', path: 'clip.jpg' },
      { id: 12, name: 'HAPPY2', path: '../../assets/mood.jpg' },
      { id: 13, name: 'HAPPY3', path: '../../assets/mood.jpg' },
      { id: 14, name: 'HAPPY4', path: '../../assets/mood.jpg' },
      { id: 15, name: 'HAPPY5', path: '../../assets/mood.jpg' },

    ];

    const emotions = [
      { id: 11, name: 'HAPPY12' },
      { id: 12, name: 'SAD' },
      { id: 13, name: 'ANGRY' },
      { id: 14, name: 'EXCITED' },
      { id: 15, name: 'ANXIOUS' },
    
      
    ];

    return {faces, emotions};

   
  
 // var MODELS: Model[] = [{ 
  //id: 1, 
  //name: 'Faces', 
  //image: '../../assets/mood.jpg', 
  //category: 'Cat 1',
  //slides: [
    //{ alt: 'Model 1 front view' , url: '../../assets/mood.jpg' },
    //{ alt: 'Model 1 rear view' , url: '../../assets/mood.jpg' },
    //{ alt: 'Model 1 side view' , url: '../../assets/mood.jpg' }
  //]  
//},];
}
}

