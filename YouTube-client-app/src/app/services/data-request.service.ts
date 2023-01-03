import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseItem } from 'src/@types/responseInterfaces';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataRequestService {
  constructor(private httpClient: HttpClient) {}

  requestCard(id: string) {
    return this.requestCards().pipe(map((cards) => cards.find((elem) => elem.id === id)));
  }

  requestCards() {
    return this.httpClient
      .get<ResponseItem[]>('https://635161643e9fa1244e5d351c.mockapi.io/data')
      .pipe(
        catchError((error) => {
          // если будет поймана ошибка - выведет ошибку в консоль и вернёт пустой массив
          console.error(error);
          return [];
        }),
      );
  }
}
