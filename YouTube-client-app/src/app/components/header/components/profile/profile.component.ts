import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  constructor(private _login: LoginService) {}

  userName = 'Your Name';

  showLogOut = false;

  ngOnInit(): void {
    const newName = this._login.getToken();
    if (newName) {
      this.userName = newName;
    }

    if (newName) {
      this.showLogOut = true;
    }
  }

  logOut() {
    this._login.deleteToken();
    console.log(localStorage);
  }
}
