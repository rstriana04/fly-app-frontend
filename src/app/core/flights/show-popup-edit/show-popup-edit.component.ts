import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';
import { FlightsService } from '../services/flights.service';

@Component({
  selector: 'fly-show-popup-edit',
  templateUrl: './show-popup-edit.component.html',
  styleUrls: ['./show-popup-edit.component.scss']
})
export class ShowPopupEditComponent implements OnInit {
  flightUpdateForm: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<ShowPopupEditComponent>,
    private flightsService: FlightsService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.initFlightUpdateForm();
    this.flightUpdateForm.get('id').setValue(this.data);
  }

  private initFlightUpdateForm() {
    this.flightUpdateForm = new FormGroup({
      id: new FormControl('', Validators.required),
      fechaSalida: new FormControl('', Validators.required),
      ciudadOrigen: new FormControl('', Validators.required),
      ciudadDestino: new FormControl('', Validators.required),
      descripcion: new FormControl('', Validators.required)
    });
  }

  public updateFlight(flightUpdateForm: FormGroup) {
    if ( flightUpdateForm.valid ) {
      this.flightsService.updateFlight(flightUpdateForm.value).subscribe(resp => {
        if ( resp.status === 200 ) {
          this.flightUpdateForm.reset();
          this.dialogRef.close(true);
          this.toastr.success('Vuelo actualizado', '¡Correcto!');
        } else {
          this.toastr.error('No se pudo actualizar el vuelo', '¡Oops...!');
        }
      });
    } else {
      this.toastr.info('Completa el formulario', '¡Oops...!');
    }

  }

  public assignDateToControl() {
    const dateFormatted = moment(this.flightUpdateForm.get('fechaSalida').value).format('YYYY-MM-DD');
    this.flightUpdateForm.get('fechaSalida').setValue(dateFormatted);
  }
}
