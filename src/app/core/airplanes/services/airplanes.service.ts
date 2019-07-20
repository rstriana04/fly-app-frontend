import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { Airplanes } from '../models/Airplanes';

@Injectable({
  providedIn: 'root'
})
export class AirplanesService {

  constructor(private http: HttpClient) { }

  getAllAirplanes(): Observable<Airplanes[]> {
    return this.http.get<Airplanes[]>(`${ environment.apiUrl }airplanes`, {
      observe: 'response',
      responseType: 'json'
    }).pipe(
      map(airplanes => airplanes.body)
    );
  }

  createFlight(airplane: Airplanes): Observable<any> {
    return this.http.post(`${ environment.apiUrl }airplanes`, airplane, {
      observe: 'response',
      responseType: 'json'
    });
  }

  updateFlight(airplane: Airplanes): Observable<any> {
    return this.http.put(`${ environment.apiUrl }airplanes`, airplane, {
      observe: 'response',
      responseType: 'json'
    });
  }

}
