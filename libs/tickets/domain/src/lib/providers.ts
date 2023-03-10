import { EnvironmentProviders, makeEnvironmentProviders, Provider } from "@angular/core";
import { provideEffects } from "@ngrx/effects";
import { provideState } from "@ngrx/store";
import { TicketsEffects } from "./+state/effects";
import { ticketsFeature } from "./+state/reducer";


function toProviders(envProviders: EnvironmentProviders): Provider[] {
    return envProviders as unknown as Provider[];
}

export function providerDomain(): EnvironmentProviders {
    return makeEnvironmentProviders([
        toProviders(provideState(ticketsFeature)),
        toProviders(provideEffects(TicketsEffects))
    ]);
}