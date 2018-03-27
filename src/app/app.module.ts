import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { LoginComponent } from './login.component';
import { DashboardComponent } from './dashboard.component';
import { EmotionsComponent } from './emotions.component';
import { EmotionSearchComponent } from './emotion-search.component';
import { EmotionDetailComponent } from './emotion-detail.component';
import { FaceService } from 'face.service';
import { FacesComponent } from './faces.component';
import { FaceSearchComponent } from './face-search.component';
import { FaceDetailComponent } from './face-detail.component';
import { EmotionService } from 'emotion.service';
import { MessageService } from 'message.service';
import { ImageService } from 'image.service';
import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ImageComponent } from './image.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from 'in-memory-data.service';



@NgModule({
  declarations: [
    AppComponent,
 //   LoginComponent,
    DashboardComponent,
    EmotionsComponent,
    EmotionSearchComponent,
    EmotionDetailComponent,
    FacesComponent,
    FaceSearchComponent,
    FaceDetailComponent,
    ImageComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
     HttpClientInMemoryWebApiModule.forRoot( InMemoryDataService, { dataEncapsulation: false } )

  
  ],
  providers: [ EmotionService, FaceService, MessageService, ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
