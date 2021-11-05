import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { EventCreateComponent } from './event/event-create/event-create.component';
import { EventsListComponent } from './event/events-list/events-list.component';
import { TicketsCreateComponent } from './event/tickets-create/tickets-create.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'events-all', component: EventsListComponent },
  { path: 'ticket-create', component: TicketsCreateComponent },
  { path: 'event-create', component: EventCreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
