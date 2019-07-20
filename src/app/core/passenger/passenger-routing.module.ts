import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PassengerComponent } from './passenger.component';

export enum passengerRouting {
  showPassenger = 'mostrar-pasajeros',
  createPassenger = 'crear-pasajero',
}

const routes: Routes = [
  { path: '', redirectTo: passengerRouting.showPassenger, pathMatch: 'full' },
  { path: passengerRouting.showPassenger, component: PassengerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PassengerRoutingModule {}
