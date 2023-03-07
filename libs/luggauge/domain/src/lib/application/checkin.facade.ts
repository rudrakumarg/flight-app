import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Luggauge } from '../entities/luggauge';
import { LuggaugeDataService } from '../infrastructure/luggauge.data.service';

@Injectable({ providedIn: 'root' })
export class CheckinFacade {
  private luggaugeListSubject = new BehaviorSubject<Luggauge[]>([]);
  luggaugeList$ = this.luggaugeListSubject.asObservable();

  constructor(private luggaugeDataService: LuggaugeDataService) {}

  load(): void {
    this.luggaugeDataService.load().subscribe({
      next: (luggaugeList) => {
        this.luggaugeListSubject.next(luggaugeList);
      },
      error: (err) => {
        console.error('err', err);
      },
    });
  }
}
