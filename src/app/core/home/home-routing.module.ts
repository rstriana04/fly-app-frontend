import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

export enum homeRouting {
  airplanes = 'aviones',
  flights = 'vuelos',
  passenger = 'pasajeros',
  tickets = 'tiquetes'
}

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: homeRouting.airplanes, loadChildren: () => import('./../airplanes/airplanes.module').then(m => m.AirplanesModule) },
  { path: homeRouting.flights, loadChildren: () => import('../flights/flights.module').then(m => m.FlightsModule) },
  { path: homeRouting.passenger, loadChildren: () => import('../passenger/passenger.module').then(m => m.PassengerModule) },
  { path: homeRouting.tickets, loadChildren: () => import('../tickets/tickets.module').then(m => m.TicketsModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
