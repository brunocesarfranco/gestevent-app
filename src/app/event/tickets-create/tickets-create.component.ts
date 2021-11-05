import { Component, OnInit } from '@angular/core';
import { EventsService } from '../services/events.service';
import { Event } from '../models/event'
import { TicketService } from '../services/ticket.service';
import { Ticket } from '../models/ticket';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tickets-create',
  templateUrl: './tickets-create.component.html',
  styleUrls: ['./tickets-create.component.scss']
})
export class TicketsCreateComponent implements OnInit {

  events: Event[] = [];
  tickets: Ticket[] = [];

  eventId: string = '';
  price: number = 0;

  constructor(
    private _eventsService: EventsService,
    private _ticketService: TicketService,
    private _router: Router) { }

  ngOnInit(): void {
    this._eventsService.fetchEvents()
      .toPromise()
      .then(e => this.events = e)
      .catch(console.error);

    this._ticketService.fetchTickets()
      .toPromise()
      .then(tickets => this.tickets = tickets)
      .catch(console.error);
  }

  // validação dos dados e faz o request para criar o ticket
  onBtnCreatePressed(): void {
    if (this.price < 0.01) {
      alert('Preço inválido');
      return;
    }

    const createTicket = {
      eventId: this.eventId,
      price: this.price
    };

    this._ticketService.createTicket(createTicket)
      .toPromise()
      .then(success => {
        alert(`ticket criado com sucesso, id: ${success.id}`)
      })
      .catch(err => {
        alert('algo deu errado..');
        console.error(err);
      });
  }

  getEventName(id: string) {
    const event: Event | undefined = this.events.find(e => e.id === id);
    return event?.title ?? '';
  }

  backToEventAll() {
    this._router.navigate(['/events-all'])
  }

  btnClick() {

  }
}
