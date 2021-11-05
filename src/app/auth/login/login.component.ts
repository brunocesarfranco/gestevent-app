import { Component, OnInit } from '@angular/core';
import { LoginForm } from '../models/login-form';
import { AuthService } from '../services/auth.service';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: LoginForm = {
    username: '',
    password: '',
  };

  constructor(
    private _tokenService: TokenService,
    private _authService: AuthService) { }

  ngOnInit(): void {
  }

  sendToken(): void {
    if (!this.loginForm.username) {
      alert('insira o usuário');
      return;
    }

    if (!this.loginForm.password) {
      alert('insira a senha');
      return;
    }

    this._tokenService.fetchToken(this.loginForm)
      .toPromise()
      .then(token => this._authService.saveToken(token.token))
      .catch(err => alert("Usuário ou senha incorretos"));
  }
}
