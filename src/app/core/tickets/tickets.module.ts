import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { ShowPopupEditTicketsComponent } from './show-popup-edit-tickets/show-popup-edit-tickets.component';

import { TicketsRoutingModule } from './tickets-routing.module';
import { TicketsComponent } from './tickets.component';

@NgModule({
  declarations: [TicketsComponent, ShowPopupEditTicketsComponent],
  entryComponents: [ShowPopupEditTicketsComponent],
  imports: [
    CommonModule,
    TicketsRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class TicketsModule {}
