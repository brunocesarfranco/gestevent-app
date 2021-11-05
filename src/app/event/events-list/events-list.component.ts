import { Component, OnInit } from '@angular/core';
import { EventsService } from '../services/events.service';
import { Event } from '../models/event'
import { Router } from '@angular/router';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})

export class EventsListComponent implements OnInit {

  public events: Event[] = [];

  constructor(
    private _eventService: EventsService,
    private _router: Router) { }

  ngOnInit(): void {
    this._eventService.fetchEvents()
      .toPromise()
      .then(e => this.events = e)
      .catch(err => alert("erro"));
  }

  btnClick(id: string) {
    this._router.navigate(['/ticket-create']);
  }

  navigateToTicketCreate(): void {
    this._router.navigate(['/ticket-create']);
  }

  navigateToCreateEvent(): void {
    this._router.navigate(['/event-create']);
  }

  navigateToCreateUser(): void {
    this._router.navigate(['/user-create']);
  }
  navigateToLogin(): void {
    this._router.navigate(['/login']);
  }
}
