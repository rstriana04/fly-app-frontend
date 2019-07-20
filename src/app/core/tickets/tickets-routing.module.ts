import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicketsComponent } from './tickets.component';

export enum ticketsRouting {
  showTickets = 'mostrar-tiquetes',
  createTicket = 'crear-tickete',
}

const routes: Routes = [
  { path: '', redirectTo: ticketsRouting.showTickets, pathMatch: 'full' },
  { path: ticketsRouting.showTickets, component: TicketsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketsRoutingModule {}
