import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor() {}

  createToken(loginName: string) {
    localStorage.setItem('tokenName', loginName);
    console.log(localStorage);
  }

  getToken(): string | undefined {
    const result = localStorage.getItem('tokenName');
    if (result) {
      return result;
    }
    return undefined;
  }

  deleteToken() {
    localStorage.removeItem('tokenName');
  }
}
