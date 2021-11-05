import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { environment } from 'src/environments/environment';
import { CreateTicketRequest } from '../models/create-ticket-request';
import { Ticket } from '../models/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(
    private _authService: AuthService,
    private _http: HttpClient) { }

  createTicket(body: CreateTicketRequest): Observable<any> {
    const token = this._authService.getToken();
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });
    return this._http.post(
      `${environment.endpointBase}ticket`,
      body,
      { headers: headers }
    );
  }

  fetchTickets(): Observable<Ticket[]> {
    const token = this._authService.getToken();
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });
    return this._http.get<Ticket[]>(`${environment.endpointBase}ticket`,
      { headers: headers }
    );
  }
}
