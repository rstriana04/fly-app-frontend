import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { FlightsRoutingModule } from './flights-routing.module';
import { FlightsComponent } from './flights.component';
import { ShowPopupEditComponent } from './show-popup-edit/show-popup-edit.component';

@NgModule({
  declarations: [FlightsComponent, ShowPopupEditComponent],
  entryComponents: [ShowPopupEditComponent],
  imports: [
    CommonModule,
    FlightsRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class FlightsModule {}
