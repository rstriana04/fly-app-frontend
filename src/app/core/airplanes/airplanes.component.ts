import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatPaginator } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { Airplanes } from './models/Airplanes';
import { AirplanesService } from './services/airplanes.service';
import { ShowPopupEditAriplanesComponent } from './show-popup-edit-ariplanes/show-popup-edit-ariplanes.component';

@Component({
  selector: 'fly-airplanes',
  templateUrl: './airplanes.component.html',
  styleUrls: ['./airplanes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AirplanesComponent implements OnInit {
  isLinear = false;
  displayedColumns: string[] = ['aerolinea', 'cantidadPasajeros', 'descripcion', 'edit'];
  airplaneForm: FormGroup;
  airplanes$: Observable<Airplanes[]>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(
    private toastr: ToastrService,
    private changeDetectorRefs: ChangeDetectorRef,
    private matDialog: MatDialog,
    private airplaneService: AirplanesService
  ) { }

  ngOnInit() {
    this.initAirplaneForm();
    this.airplanes$ = this.airplaneService.getAllAirplanes();
  }

  private initAirplaneForm() {
    this.airplaneForm = new FormGroup({
      aerolinea: new FormControl('', Validators.required),
      descripcion: new FormControl('', Validators.required),
      cantidadMaximaPasajeros: new FormControl('', Validators.required)
    });
  }

  public registerAirplane(airplaneForm: FormGroup) {
    if ( airplaneForm.valid ) {
      this.airplaneService.createFlight(airplaneForm.value).subscribe(resp => {
        if ( resp.status === 200 ) {
          this.refresh();
          this.airplaneForm.reset();
          this.toastr.success('Avion creado correctamente!', '¡Correcto!');
        } else {
          this.toastr.error('Ocurrio un error creando el avion!', '¡Correcto!');
        }
      });
    } else {
      this.toastr.info('Completa el formulario', 'Ooops!!');
    }
  }

  private refresh() {
    this.airplanes$ = this.airplaneService.getAllAirplanes();
    this.changeDetectorRefs.detectChanges();
  }

  public showEditAirplane(id: number) {
    const dialogRef = this.matDialog.open(ShowPopupEditAriplanesComponent, {
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
