import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AirplanesComponent } from './airplanes.component';

export enum airplanesRouting {
  showAirplanes = 'mostrar-aviones',
  createAirplanes = 'crear-avion',
}

const routes: Routes = [
  { path: '', redirectTo: airplanesRouting.showAirplanes, pathMatch: 'full' },
  { path: airplanesRouting.showAirplanes, component: AirplanesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AirplanesRoutingModule {}
