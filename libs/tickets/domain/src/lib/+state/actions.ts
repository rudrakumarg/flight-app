import { createActionGroup, props, emptyProps } from '@ngrx/store';
import { Flight } from '../entities/flight';

export const ticketActions = createActionGroup({
    source: 'tickets',
    events: {
        'flights loaded': props<{ flights: Flight[]}>(),
        'update flight': props<{ flight: Flight}>(),
        'load flights': props<{ from: string; to: string}>(),
        'clear flights': emptyProps(),
        'load flight by id': props<{id: string}>(),
        'flight loaded': props<{flight: Flight}>(),
        'save flight': props<{flight: Flight}>()
    }
});