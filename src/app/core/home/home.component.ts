import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticket } from '../tickets/models/Ticket';
import { TicketsService } from '../tickets/services/tickets.service';

@Component({
  selector: 'fly-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  tickets$: Observable<Ticket[]>;

  constructor(
    private ticketsService: TicketsService
  ) { }

  ngOnInit() {
    this.tickets$ = this.ticketsService.getAllTickets();
  }

}
