import { Component, input } from '@angular/core';
import { ContentCardComponent } from '../content-card/content-card.component';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-intro',
  imports: [ContentCardComponent, RouterLink, RouterModule],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.css'
})
export class IntroComponent {
backgroundPicture = input();
}
