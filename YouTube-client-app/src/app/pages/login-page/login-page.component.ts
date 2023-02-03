import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  loginForm = new FormGroup({
    login: new FormControl('', [Validators.minLength(5), Validators.required]),
    password: new FormControl('', [Validators.minLength(5), Validators.required]),
  });

  constructor(private _login: LoginService) {}

  ngOnInit(): void {}

  login() {
    console.log(this.loginForm);
    const form = this.loginForm;
    if (form.valid && form.controls.login.value) {
      this._login.createToken(form.controls.login.value);
    }
  }
}
