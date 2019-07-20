import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { Flights } from '../models/Flights';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {

  constructor(private http: HttpClient) { }

  getAllFlights(): Observable<Flights[]> {
    return this.http.get<Flights[]>(`${ environment.apiUrl }flights`, {
      observe: 'response',
      responseType: 'json'
    }).pipe(
      map(flights => flights.body)
    );
  }

  createFlight(flight: Flights): Observable<any> {
    return this.http.post(`${ environment.apiUrl }flights`, flight, {
      observe: 'response',
      responseType: 'json'
    });
  }

  updateFlight(flight: Flights): Observable<any> {
    return this.http.put(`${ environment.apiUrl }flights`, flight, {
      observe: 'response',
      responseType: 'json'
    });
  }

}
