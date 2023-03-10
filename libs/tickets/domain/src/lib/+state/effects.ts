import { inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { switchMap, map, catchError, throwError, tap } from "rxjs";
import { FlightService } from "../infrastructure/flight.service";
import { ticketActions } from "./actions";
import { MatSnackBar } from '@angular/material/snack-bar';

export class TicketsEffects{
    snackBar = inject(MatSnackBar)
    flightService = inject(FlightService);
    actions$ = inject(Actions);

    loadFlights = createEffect(() => 
        this.actions$.pipe(
            ofType(ticketActions.loadFlights),
            switchMap((a) => this.flightService.find(a.from, a.to)),
            map((flights) => ticketActions.flightsLoaded({flights}))
        )
    );

    loadFlightById = createEffect(() => 
    this.actions$.pipe(
        ofType(ticketActions.loadFlightById),
        switchMap((a) => this.flightService.findById(a.id)),
        map((flight) => ticketActions.flightLoaded({flight}))
    ));

    saveFlight = createEffect(
        () =>
          this.actions$.pipe(
            ofType(ticketActions.saveFlight),
            switchMap((a) => this.flightService.save(a.flight)),
            tap(() => {
              this.snackBar.open('Flight successfully saved!');
            }),
            catchError((err) => {
              this.snackBar.open('Error saving Flight!');
              return throwError(() => err);
            })
          ),
        {
          dispatch: false,
        }
      );
}