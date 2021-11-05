import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsService } from './services/events.service';
import { FormsModule } from '@angular/forms';
import { EventsListComponent } from './events-list/events-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { TicketsListComponent } from './tickets-list/tickets-list.component';
import { TicketsCreateComponent } from './tickets-create/tickets-create.component';
import { EventCreateComponent } from './event-create/event-create.component';

@NgModule({
  declarations: [
    EventsListComponent,
    TicketsListComponent,
    TicketsCreateComponent,
    EventCreateComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
  ],
  providers: [
    EventsService
  ]
})
export class EventModule { }
