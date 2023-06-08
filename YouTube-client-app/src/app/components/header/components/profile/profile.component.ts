import { Component, OnInit } from '@angular/core';
import { map, tap } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent /** implements OnInit */ {
  userName$ = this._login.token$.pipe(
    map((token) => token || 'Your name'),
    tap(console.log),
  );

  showLogOut$ = this._login.token$.pipe(
    map((token) => !!token),
    tap(console.log),
  );

  userName = 'Your Name';

  showLogOut = false;

  constructor(private _login: LoginService) {
    // this._login.token$.subscribe((token) => {
    //   this.userName = token || 'Your name';
    //   this.showLogOut = !!token;
    // });
  }

  // синхронный говно вариант
  // userName = 'Your Name';

  // showLogOut = false;

  // ngOnInit(): void {
  //   const newName = this._login.getToken();
  //   if (newName) {
  //     this.userName = newName;
  //   }

  //   if (newName) {
  //     this.showLogOut = true;
  //   }
  // }

  logOut() {
    this._login.deleteToken();
  }
}
