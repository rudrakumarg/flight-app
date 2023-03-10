import { createFeature, createReducer, on } from "@ngrx/store";
import { Flight, initFlight } from "../entities/flight";
import { FlightTicket } from "../entities/flight-ticket";
import { Passenger } from "../entities/passenger";
import { ticketActions } from "./actions";


export type PassengerState = Omit<Passenger, 'tickets'> & {
    ticketIds: number[];
};

export type FlightTicketState = Omit<FlightTicket, 'passenger' | 'flight'> & {
    passengerId: number;
    flightId: number;
};

export interface TicketsState {
    flights: Flight[];
    basket: unknown;
    hide: number[];
    passengers: Record<number, PassengerState>;
    passengerIds: number[];
    flightTickets: Record<number, FlightTicketState>;
    flightTicketIds: number[];
    flightToEdit: Flight;
}

export const initialState: TicketsState = {
    flights: [],
    basket: {},
    hide: [680],
    passengers: {
        17: { id: 17, firstName: 'John', lastName: 'Doe', ticketIds: [107, 109] },
        24: { id: 24, firstName: 'Jane', lastName: 'Doe', ticketIds: [108, 110] },
      },
      passengerIds: [17, 24],
    flightToEdit: initFlight,
      flightTickets: {
        107: { id: 107, flightId: 1, passengerId: 17, price: 317 },
        108: { id: 108, flightId: 1, passengerId: 24, price: 317 },
        109: { id: 109, flightId: 2, passengerId: 17, price: 294 },
        110: { id: 110, flightId: 2, passengerId: 24, price: 294 },
      },
      flightTicketIds: [107, 108, 109, 110],
}

export const ticketsFeature = createFeature({
    name: 'tickets',
    reducer: createReducer(
        initialState,
        on(ticketActions.flightsLoaded, (state, action) => {
            return {
                ...state,
                flights: action.flights,
            }
        }),
        on(ticketActions.updateFlight, (state, action) => {
            const updated = action.flight;
            const flights = state.flights.map((f) => f.id === updated.id ? updated : f);
            return {
                ...state,
                flights
            }
        }),
        on(ticketActions.clearFlights, (state) => {
            return {
                ...state,
                flights: []
            }
        }),
        on(ticketActions.flightLoaded, (state, action) => {
            const flightToEdit = action.flight;
            return {
                ...state,
                flightToEdit
            }
        })
    )
})