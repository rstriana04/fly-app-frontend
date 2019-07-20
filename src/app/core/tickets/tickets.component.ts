import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { auditTime, distinctUntilChanged, map, switchMap } from 'rxjs/operators';
import { Airplanes } from '../airplanes/models/Airplanes';
import { AirplanesService } from '../airplanes/services/airplanes.service';
import { Flights } from '../flights/models/Flights';
import { FlightsService } from '../flights/services/flights.service';
import { Passenger } from '../passenger/models/Passenger';
import { PassengerService } from '../passenger/services/passenger.service';

@Component({
  selector: 'fly-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TicketsComponent implements OnInit {
  isLinear = false;
  ticketForm: FormGroup;
  passengers$: Observable<Passenger[]>;
  filteredPassengers$: Observable<Passenger[]>;
  airplanes$: Observable<Airplanes[]>;
  filteredAirplanes$: Observable<Airplanes[]>;
  flights$: Observable<Flights[]>;
  filteredFlights$: Observable<Flights[]>;

  constructor(
    private passengerService: PassengerService,
    private airplanesService: AirplanesService,
    private flightsServices: FlightsService
  ) { }

  ngOnInit() {
    this.initTicketForm();
    this.getAllPassengers();
    this.getAllAirplanes();
    this.getAllFlights();
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

  public registerTicket(ticketForm: FormGroup) {
    console.log(ticketForm.value);
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
    console.log(passenger);
  }

  public setFlightsToControl(flight: Flights) {
    console.log(flight);
  }
}
