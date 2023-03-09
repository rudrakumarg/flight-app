import { loadRemoteModule } from '@angular-architects/module-federation';
import { AfterViewInit, Component, inject, Injector, ViewChild, ViewContainerRef, Type } from '@angular/core';
import { NextFlightsService } from './next-flights.service';

@Component({
  selector: 'app-next-flights',
  templateUrl: './next-flights.component.html',
  styleUrls: ['./next-flights.component.css'],
})
export class NextFlightsComponent implements AfterViewInit {
@ViewChild('placeholder', { read: ViewContainerRef })
placeholder: ViewContainerRef | undefined;

injector = inject(Injector);

  nextFlightsService = inject(NextFlightsService);
  flights$ = this.nextFlightsService.load();

  comp: Type<unknown> | undefined;

  async ngAfterViewInit() {
      if(!this.placeholder) return;

      const m = await loadRemoteModule('checkin', './Component');
      this.placeholder.createComponent(m.AppComponent, {
        injector: this.injector
      });

      //working with properties and events:
      // const comp = this.placeholder.createComponent();
  }
}
