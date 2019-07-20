import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { FooterComponent } from './footer/footer.component';
import { MaterialModule } from './material/material.module';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
  declarations: [FooterComponent, SidenavComponent],
  exports: [
    SidenavComponent,
    FooterComponent,
    MaterialModule,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    ToastrModule.forRoot()
  ]
})
export class SharedModule {}
