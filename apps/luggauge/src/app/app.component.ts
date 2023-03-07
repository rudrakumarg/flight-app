import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
//import { CheckinComponent } from '@flight-demo/luggauge/feature-checkin';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  selector: 'flight-demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'luggauge';
}
