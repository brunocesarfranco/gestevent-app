import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginForm } from '../models/login-form';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private _http: HttpClient) { }

  fetchToken(loginForm: LoginForm): Observable<any> {
    return this._http.post<any>(`${environment.endpointBase}user/login`, loginForm);
  }
}
