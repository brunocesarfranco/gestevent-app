import { Component, OnInit } from '@angular/core';
import { Event } from '../models/event'
import { EventsService } from '../services/events.service';
import { TicketService } from '../services/ticket.service';

@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.scss']
})
export class EventCreateComponent implements OnInit {

  eventForm: Event = new Event();
  constructor(private _eventService: EventsService) { }

  ngOnInit(): void {
  }

  createEvent(): void {

    if (!this.eventForm.title) {
      alert('O título é obrigatório');
      return;
    }

    if (!this.eventForm.date) {
      alert('A data é obrigatória');
      return;
    }

    this.eventForm.date = new Date(this.eventForm.date);
    this._eventService.createEvent(this.eventForm)
      .toPromise()
      .then(e => alert(`Evento criado com id: ${e.id}`))
      .then(console.error);
  }

}
