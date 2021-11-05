import { HttpClient, HttpHeaders } from '@angular/common/http';
import { createDirectiveDefinitionMap } from '@angular/compiler/src/render3/partial/directive';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { environment } from 'src/environments/environment';
import { Event } from '../models/event'

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private _http: HttpClient, private _authService: AuthService) { }

  fetchEvents(): Observable<Event[]> {
    const token = this._authService.getToken();
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });
    return this._http.get<Event[]>(
      `${environment.endpointBase}events`,
      { headers: headers }
    );
  }

  createEvent(event: Event): Observable<any> {
    const token = this._authService.getToken();
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });
    return this._http.post(
      `${environment.endpointBase}events`,
      event,
      { headers: headers }
    );
  }
}
