import { Component, OnInit } from '@angular/core';
import { LoginForm } from '../models/login-form';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {

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
        this._router.navigate(['/events-all']);
      })
      .catch(console.error);
  }

  backToEventAll() {
    this._router.navigate(['/events-all'])
  }
}
