import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { HomeModule } from '../../home/home.module';
import { Passenger } from '../models/Passenger';

@Injectable({
  providedIn: HomeModule
})
export class PassengerService {

  constructor(private http: HttpClient) {}

  getAllPassengers(): Observable<Passenger[]> {
    return this.http.get<Passenger[]>(`${ environment.apiUrl }passengers`, {
      observe: 'response',
      responseType: 'json'
    }).pipe(
      map(passengers => passengers.body)
    );
  }

  createPassenger(passenger: Passenger): Observable<any> {
    return this.http.post(`${ environment.apiUrl }/passengers`, passenger, {
      observe: 'response',
      responseType: 'json'
    });
  }

}
