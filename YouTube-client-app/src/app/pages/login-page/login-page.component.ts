import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  loginForm = new FormGroup({
    login: new FormControl('', [Validators.minLength(5), Validators.required]),
    password: new FormControl('', [Validators.minLength(5), Validators.required]),
  });

  constructor(private _login: LoginService, private _router: Router) {}

  login() {
    const form = this.loginForm;
    const loginValue = form.controls.login.value;

    if (form.valid && loginValue) {
      this._login.createToken(loginValue);
      this._router.navigate(['main']);
    }
  }
}
