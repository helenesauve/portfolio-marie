import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { RadioComponent } from './radio/radio.component';
import { VideoComponent } from './video/video.component';
import { IntroComponent } from './intro/intro.component';
import { NewsVerificationComponent } from './news-verification/news-verification.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: IntroComponent },
  { path: 'video', component: VideoComponent },
  { path: 'radio', component: RadioComponent },
  { path: 'about', component: AboutComponent },
  { path: 'news-verification', component: NewsVerificationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
