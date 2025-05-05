import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IntroComponent } from './intro/intro.component';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, IntroComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'marie-portfolio';
}
