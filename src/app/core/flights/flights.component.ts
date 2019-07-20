import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatPaginator } from '@angular/material';
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { Flights } from './models/Flights';
import { FlightsService } from './services/flights.service';
import { ShowPopupEditComponent } from './show-popup-edit/show-popup-edit.component';

@Component({
  selector: 'fly-fligths',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class FlightsComponent implements OnInit {

  flightForm: FormGroup;
  isLinear = false;
  displayedColumns: string[] = ['fechaSalida', 'ciudadOrigen', 'ciudadDestino', 'descripcion', 'edit'];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  flights$: Observable<Flights[]>;

  constructor(
    private flightsService: FlightsService,
    private toastr: ToastrService,
    private changeDetectorRefs: ChangeDetectorRef,
    private matDialog: MatDialog
  ) { }

  ngOnInit() {
    this.initFlightForm();
    this.flights$ = this.flightsService.getAllFlights();
  }

  private initFlightForm() {
    this.flightForm = new FormGroup({
      fechaSalida: new FormControl('', Validators.required),
      ciudadOrigen: new FormControl('', Validators.required),
      ciudadDestino: new FormControl('', Validators.required),
      descripcion: new FormControl('', Validators.required)
    });
  }

  public registerFlight(flightForm: FormGroup) {
    if ( flightForm.valid ) {
      this.flightsService.createFlight(flightForm.value).subscribe(resp => {
        if ( resp.status === 200 ) {
          this.refresh();
          this.flightForm.reset();
          this.toastr.success('Vuelo registrado correctamente', '¡Correcto!');
        } else {
          this.toastr.error('No se pudo registrar el vuelo', '¡Ooops..!');

        }
      });
    } else {
      this.toastr.info('Complete el formulario', '¡Ooops...!');

    }
  }

  private refresh() {
    this.flights$ = this.flightsService.getAllFlights();
    this.changeDetectorRefs.detectChanges();
  }

  public assignDateToControl() {
    const dateFormatted = moment(this.flightForm.get('fechaSalida').value).format('YYYY-MM-DD');
    this.flightForm.get('fechaSalida').setValue(dateFormatted);
  }

  public showEditFlight(id: number) {
    const dialogRef = this.matDialog.open(ShowPopupEditComponent, {
      width: '400px',
      data: id
    });

    dialogRef.afterClosed().subscribe(resp => {
      if ( resp ) {
        this.refresh();
      }
    });
  }
}
