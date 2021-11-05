import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private _authService: AuthService,
    private _router: Router) { }

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
      .then(token => {
        this._authService.saveToken(token.token);
        this._router.navigate(['/events-all']);
      })
      .catch(err => alert("Usuário ou senha incorretos"));
  }
}
