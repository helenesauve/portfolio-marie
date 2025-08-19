import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-content-card',
  imports: [],
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.css'
})
export class ContentCardComponent {
backgroundImage = input.required<string>()
title = input.required<string>()
}
