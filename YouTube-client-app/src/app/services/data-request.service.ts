import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseItem } from 'src/@types/responseInterfaces';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { IFinalResponse, IYouTubeSearchResponse } from 'src/@types/youTubeSearchResponse';
import { Observable } from 'rxjs';
import { SearchService } from './search.service';

@Injectable({
  providedIn: 'root',
})
export class DataRequestService {
  private _apiKey = 'AIzaSyB_rqIPT_MW81dumY4TJ7l-WOw1Ux7wnFE';

  nextPageToken = '';

  private _maxResults = 12;

  constructor(private httpClient: HttpClient, private searchService: SearchService) {}

  requestCard(id: string) {
    return this.searchService.cards.find((elem) => elem.id === id);
  }

  searchCardsName(cardsName: string) {
    return this.httpClient
      .get<IYouTubeSearchResponse>(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&key=${this._apiKey}&q=${cardsName}&maxResults=${this._maxResults}`,
      )
      .pipe(
        catchError((error) => {
          console.error(error, 'ошибка в запросе');
          return [];
        }),
      );
  }

  requestYouTubeCards(str: string) {
    return this.searchCardsName(str).pipe(
      map((response) => {
        this.nextPageToken = response.nextPageToken;
        return response.items.map((el) => el.id.videoId).join(',');
      }),
      switchMap((string) =>
        this.httpClient.get<IFinalResponse>(
          `https://www.googleapis.com/youtube/v3/videos?part=statistics,snippet&key=${this._apiKey}&id=${string}`,
        ),
      ),
    );
  }

  // next page

  nextPageSearchCardsName(cardsName: string) {
    return this.httpClient
      .get<IYouTubeSearchResponse>(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&key=${this._apiKey}&q=${cardsName}&maxResults=${this._maxResults}&pageToken=${this.nextPageToken}`,
      )
      .pipe(
        catchError((error) => {
          console.error(error, 'ошибка в запросе');
          return [];
        }),
      );
  }

  nextPageRequestYouTubeCards(str: string) {
    return this.nextPageSearchCardsName(str).pipe(
      map((response) => {
        this.nextPageToken = response.nextPageToken;
        return response.items.map((el) => el.id.videoId).join(',');
      }),
      switchMap((string) =>
        this.httpClient.get<IFinalResponse>(
          `https://www.googleapis.com/youtube/v3/videos?part=statistics,snippet&key=${this._apiKey}&id=${string}`,
        ),
      ),
    );
  }
}
