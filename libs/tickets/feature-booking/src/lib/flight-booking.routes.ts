import { Routes } from '@angular/router';
import { providerDomain, ticketsFeature } from '@flight-demo/tickets/domain';
import { provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { FlightBookingComponent } from './flight-booking.component';
import { FlightEditReactiveComponent } from './flight-edit-reactive/flight-edit-reactive.component';
import { FlightLookupComponent } from './flight-lookup/flight-lookup.component';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { PassengerSearchComponent } from './passenger-search/passenger-search.component';

export const FLIGHT_BOOKING_ROUTES: Routes = [
  {
    path: '',
    component: FlightBookingComponent,
    providers: [providerDomain()],
    children: [
      {
        path: 'flight-lookup',
        component: FlightLookupComponent,
      },
      {
        path: 'flight-search',
        component: FlightSearchComponent,
      },
      {
        path: 'flight-edit/:id',
        component: FlightEditReactiveComponent,
      },
      {
        path: 'passenger-search',
        component: PassengerSearchComponent,
      },
    ],
  },
];

export default FLIGHT_BOOKING_ROUTES;
