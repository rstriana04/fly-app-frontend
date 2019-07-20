import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { auditTime, distinctUntilChanged, map, switchMap } from 'rxjs/operators';
import { Airplanes } from '../airplanes/models/Airplanes';
import { AirplanesService } from '../airplanes/services/airplanes.service';
import { Flights } from '../flights/models/Flights';
import { FlightsService } from '../flights/services/flights.service';
import { Passenger } from '../passenger/models/Passenger';
import { PassengerService } from '../passenger/services/passenger.service';
import { Ticket } from './models/Ticket';
import { TicketsService } from './services/tickets.service';

@Component({
  selector: 'fly-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TicketsComponent implements OnInit {
  isLinear = false;
  displayedColumns: string[] = ['valorTiquete', 'ivaTiquete', 'descuentoTiquete', 'pasajero', 'vuelo', 'avion', 'edit'];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  ticketForm: FormGroup;
  passengers$: Observable<Passenger[]>;
  filteredPassengers$: Observable<Passenger[]>;
  airplanes$: Observable<Airplanes[]>;
  filteredAirplanes$: Observable<Airplanes[]>;
  flights$: Observable<Flights[]>;
  filteredFlights$: Observable<Flights[]>;
  tickets$: Observable<Ticket[]>;
  private iva = 0.19;
  constructor(
    private passengerService: PassengerService,
    private airplanesService: AirplanesService,
    private flightsServices: FlightsService,
    private ticketsService: TicketsService,
    private toastrService: ToastrService
  ) { }

  ngOnInit() {
    this.initTicketForm();
    this.getAllPassengers();
    this.getAllAirplanes();
    this.getAllFlights();
    this.tickets$ = this.ticketsService.getAllTickets();
  }

  private initTicketForm() {
    this.ticketForm = new FormGroup({
      valorTiquete: new FormControl('', Validators.required),
      ivaTiquete: new FormControl('', Validators.required),
      descuentoTiquete: new FormControl('', Validators.required),
      passenger: new FormControl('', Validators.required),
      passengers: new FormControl('', Validators.required),
      airplanes: new FormControl('', Validators.required),
      airplane: new FormControl('', Validators.required),
      flights: new FormControl('', Validators.required),
      flight: new FormControl('', Validators.required)
    });
  }

  private getAllPassengers() {
    this.passengers$ = this.passengerService.getAllPassengers();
    this.filteredPassengers$ = this.ticketForm.get('passenger').valueChanges.pipe(
      distinctUntilChanged(),
      auditTime(1000),
      switchMap((value) => this.filterPassengers(value))
    );
  }

  private getAllAirplanes() {
    this.airplanes$ = this.airplanesService.getAllAirplanes();
    this.filteredAirplanes$ = this.ticketForm.get('airplane').valueChanges.pipe(
      distinctUntilChanged(),
      auditTime(1000),
      switchMap((value) => this.filterAirplanes(value))
    );
  }

  private getAllFlights() {
    this.flights$ = this.flightsServices.getAllFlights();
    this.filteredFlights$ = this.ticketForm.get('flight').valueChanges.pipe(
      distinctUntilChanged(),
      auditTime(1000),
      switchMap((value) => this.filterFlights(value))
    );
  }



  private filterPassengers(value: string): Observable<Passenger[]> {
    if ( value ) {
      const filterValue = value.toLowerCase();
      return this.passengers$.pipe(
        map((resp) => resp.filter(
          (passenger) => passenger.nombreCompleto.toLowerCase().indexOf(filterValue) === 0))
      );
    } else {
      return this.passengers$;
    }
  }

  private filterAirplanes(value: string): Observable<Airplanes[]> {
    if ( value ) {
      const filterValue = value.toLowerCase();
      return this.airplanes$.pipe(
        map((resp) => resp.filter(
          (airplane) =>
            airplane.aerolinea.toLowerCase().indexOf(filterValue) === 0 ||
            airplane.descripcion.toLowerCase().indexOf(filterValue) === 0
        ))
      );
    } else {
      return this.airplanes$;
    }
  }

  private filterFlights(value: string): Observable<Flights[]> {
    if ( value ) {
      const filterValue = value.toLowerCase();
      return this.flights$.pipe(
        map((resp) => resp.filter(
          (flight) => flight.descripcion.toLowerCase().indexOf(filterValue) === 0 ||
                      flight.ciudadDestino.toLowerCase().indexOf(filterValue) === 0 ||
                      flight.ciudadOrigen.toLowerCase().indexOf(filterValue) === 0
        ))
      );
    } else {
      return this.flights$;
    }
  }

  public setPassengerToControl(passenger: Passenger) {
    this.ticketForm.get('passengers').setValue(passenger);

  }

  public setFlightsToControl(flight: Flights) {
    this.ticketForm.get('flights').setValue(flight);
  }

  public setAirplanesToControl(airplane: Airplanes) {
    this.ticketForm.get('airplanes').setValue(airplane);
  }

  public registerTicket(ticketForm: FormGroup) {
    if ( ticketForm.valid ) {
      this.ticketsService.createTicket(ticketForm.value).subscribe(resp => {
        if ( resp.status === 200 ) {
          this.toastrService.success('Ticket Creado Correctamente', '¡Correcto!');
          this.ticketForm.reset();
          this.refresh();
        } else {
          this.toastrService.error('Ocurrio un error creando el ticket', '¡Ooops...!');
        }
      });
    } else {
      this.toastrService.info('Complete el formulario', '¡Ooops...!');
    }
  }

  public calculateIva($event: any) {
    const iva = ( $event.target.value * this.iva );
    this.ticketForm.get('ivaTiquete').setValue(iva);
  }

  private refresh() {
    this.tickets$ = this.ticketsService.getAllTickets();
  }

  public showEditTicket(id: any) {
    
  }
}
