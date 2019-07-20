import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { Ticket } from '../models/Ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {

  constructor(private http: HttpClient) { }

  getAllTickets(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(`${ environment.apiUrl }tickets`, {
      observe: 'response',
      responseType: 'json'
    }).pipe(
      map(tickets => tickets.body)
    );
  }

  createTicket(ticket: Ticket): Observable<any> {
    return this.http.post(`${ environment.apiUrl }tickets`, ticket, {
      observe: 'response',
      responseType: 'json'
    });
  }

  updateTicket(ticket: Ticket): Observable<any> {
    return this.http.put(`${ environment.apiUrl }tickets`, ticket, {
      observe: 'response',
      responseType: 'json'
    });
  }
}
