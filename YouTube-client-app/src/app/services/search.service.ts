import { Injectable } from '@angular/core';
import { ResponseItem } from 'src/@types/responseInterfaces';
import {
  IFinalItem,
  IFinalResponse,
  IYouTubeResponseItems,
} from 'src/@types/youTubeSearchResponse';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  value: string = '';

  cards: IFinalItem[] = [];

  // constructor() {}

  search(arrayCards: IFinalResponse) {
    const reg = new RegExp(this.value, 'gi');
    this.cards = arrayCards.items.filter((card) => card.snippet.title.match(reg));
  }
}
