import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private _token$ = new ReplaySubject<null | string>(1);

  public token$ = this._token$.asObservable();

  constructor() {
    this._token$.next(this._getToken());
  }

  createToken(loginName: string) {
    localStorage.setItem('tokenName', loginName);
    this._token$.next(loginName);
    // console.log(localStorage);
  }

  private _getToken(): string | null {
    const result = localStorage.getItem('tokenName');
    if (result) {
      return result;
    }
    return null;
  }

  deleteToken() {
    localStorage.removeItem('tokenName');
    this._token$.next(null);
  }
}
