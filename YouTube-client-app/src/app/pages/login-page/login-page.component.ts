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
    console.log(this.loginForm);
    const form = this.loginForm;
    if (form.valid && form.controls.login.value) {
      this._login.createToken(form.controls.login.value);
      this._router.navigate(['main']);
    }
  }
}
