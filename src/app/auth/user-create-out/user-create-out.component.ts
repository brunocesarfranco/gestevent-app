import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginForm } from '../models/login-form';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-create-out',
  templateUrl: './user-create-out.component.html',
  styleUrls: ['./user-create-out.component.scss']
})
export class UserCreateOutComponent implements OnInit {

  registrationForm: LoginForm = new LoginForm();
  constructor(
    private _userService: UserService,
    private _router: Router) { }

  ngOnInit(): void {
  }

  register() {
    if (!this.registrationForm.username) {
      alert('O nome de usuário é obrigatório');
    }
    if (!this.registrationForm.password) {
      alert('A senha é obrigatória');
      return;
    }

    this._userService.registerUser(this.registrationForm)
      .toPromise()
      .then(success => {
        alert(`O usuário foi criado com id: ${success.id}`);
      })
      .catch(console.error);
  }

  backToEventAll() {
    this._router.navigate(['/login'])
  }
}
