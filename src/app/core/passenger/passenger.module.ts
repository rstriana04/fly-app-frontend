import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { SharedModule } from '../../shared/shared.module';

import { PassengerRoutingModule } from './passenger-routing.module';
import { PassengerComponent } from './passenger.component';
import { ShowPopupEditComponent } from './show-popup-edit/show-popup-edit.component';

@NgModule({
  declarations: [PassengerComponent, ShowPopupEditComponent],
  entryComponents: [ShowPopupEditComponent],
  imports: [
    CommonModule,
    PassengerRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    ToastrModule.forRoot()

  ]
})
export class PassengerModule {}
