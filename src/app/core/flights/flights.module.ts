import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { FlightsRoutingModule } from './flights-routing.module';
import { FlightsComponent } from './flights.component';

@NgModule({
  declarations: [FlightsComponent],
  imports: [
    CommonModule,
    FlightsRoutingModule,
    SharedModule
  ]
})
export class FlightsModule {}
