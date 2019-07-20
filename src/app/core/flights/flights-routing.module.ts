import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightsComponent } from './flights.component';

export enum flightsRouting {
  showFlights = 'mostrar-vuelos',
  createFlight = 'crear-vuelo',
}

const routes: Routes = [
  { path: '', redirectTo: flightsRouting.showFlights, pathMatch: 'full' },
  { path: flightsRouting.showFlights, component: FlightsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlightsRoutingModule {}
