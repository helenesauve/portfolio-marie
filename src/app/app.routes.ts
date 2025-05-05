import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WritingComponent } from './writing/writing.component';
import { ContactComponent } from './contact/contact.component';
import { RadioComponent } from './radio/radio.component';
import { VideoComponent } from './video/video.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'writing', component: WritingComponent },
  { path: 'video', component: VideoComponent },
  { path: 'radio', component: RadioComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
