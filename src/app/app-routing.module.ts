import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { LoginComponent } from './login.component';
import { DashboardComponent } from './dashboard.component';
import { EmotionsComponent } from './emotions.component';
import { EmotionDetailComponent } from './emotion-detail.component';
import { FacesComponent } from './faces.component';
import { FaceDetailComponent } from './face-detail.component';
import { ImageComponent } from './image.component';




const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
   {path: 'emotions', component: EmotionsComponent },
   {path: 'faces', component: FacesComponent },
   {path: 'dashboard', component: DashboardComponent },
 // { path: 'login', component: LoginComponent },
  { path: 'detail/:id', component: EmotionDetailComponent },
   { path: 'detail/:id', component: FaceDetailComponent },
    {path: 'images', component: ImageComponent}

 
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

