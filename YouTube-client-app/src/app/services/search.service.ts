import { Injectable } from '@angular/core';
import { ResponseItem } from 'src/@types/responseInterfaces';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  value: string = '';

  cards: ResponseItem[] = [];

  // constructor() {}

  search(arrayCards: ResponseItem[]) {
    const reg = new RegExp(this.value, 'gi');
    this.cards = arrayCards.filter((card) => card.snippet.title.match(reg));
  }
}
