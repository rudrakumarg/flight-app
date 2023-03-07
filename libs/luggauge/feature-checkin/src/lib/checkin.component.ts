import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CheckinFacade } from '@flight-demo/luggauge/domain';
import { LuggaugeCardComponent } from '@flight-demo/luggauge/ui-common';

@Component({
  imports: [CommonModule, LuggaugeCardComponent],
  selector: 'luggauge-checkin',
  standalone: true,
  templateUrl: './checkin.component.html',
  styleUrls: ['./checkin.component.scss'],
})
export class CheckinComponent implements OnInit {
  luggaugeList$ = this.checkinFacade.luggaugeList$;

  constructor(private checkinFacade: CheckinFacade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.checkinFacade.load();
  }
}
