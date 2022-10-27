import { Injectable } from '@angular/core';
import { ResponseItem } from 'src/@types/responseInterfaces';

@Injectable({
  providedIn: 'root',
})
export class DataRequestService {
  // constructor() {}

  request(): Promise<ResponseItem[]> {
    return fetch('https://635161643e9fa1244e5d351c.mockapi.io/data')
      .then((data) => data.json())
      .then((data) => data);
  }
}
