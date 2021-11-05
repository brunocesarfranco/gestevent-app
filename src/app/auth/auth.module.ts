import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TokenService } from './services/token.service';
import { AuthService } from './services/auth.service';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserService } from './services/user.service';
import { UserCreateOutComponent } from './user-create-out/user-create-out.component';


@NgModule({
  declarations: [
    LoginComponent,
    UserCreateComponent,
    UserCreateOutComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    HttpClientModule,
    TokenService,
    AuthService,
    UserService
  ]
})
export class AuthModule { }
