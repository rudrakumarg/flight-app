import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { initLuggauge } from '@flight-demo/luggauge/domain';

@Component({
  selector: 'common-luggauge-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './luggauge-card.component.html',
  styleUrls: ['./luggauge-card.component.css'],
})
export class LuggaugeCardComponent {
  @Input() luggauge = initLuggauge;
}
