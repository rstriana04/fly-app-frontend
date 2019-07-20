import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { AirplanesRoutingModule } from './airplanes-routing.module';
import { AirplanesComponent } from './airplanes.component';

@NgModule({
  declarations: [AirplanesComponent],
  imports: [
    CommonModule,
    AirplanesRoutingModule,
    SharedModule
  ]
})
export class AirplanesModule {}
