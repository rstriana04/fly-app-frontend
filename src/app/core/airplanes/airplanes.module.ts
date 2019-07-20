import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';

import { AirplanesRoutingModule } from './airplanes-routing.module';
import { AirplanesComponent } from './airplanes.component';
import { ShowPopupEditAriplanesComponent } from './show-popup-edit-ariplanes/show-popup-edit-ariplanes.component';

@NgModule({
  declarations: [AirplanesComponent, ShowPopupEditAriplanesComponent],
  entryComponents: [ShowPopupEditAriplanesComponent],
  imports: [
    CommonModule,
    AirplanesRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class AirplanesModule {}
