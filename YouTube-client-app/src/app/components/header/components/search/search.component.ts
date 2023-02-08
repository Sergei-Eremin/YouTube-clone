import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
import { DataRequestService } from 'src/app/services/data-request.service';
import { ResponseItem } from 'src/@types/responseInterfaces';
import { YouTubeApiService } from 'src/app/services/you-tube-api.service';
import { debounce, distinctUntilChanged, filter, fromEvent, interval, map } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @Output() settingClick = new EventEmitter<void>();

  comingCards: ResponseItem[] = [];

  private _search$: any;

  minlength = 3;

  constructor(
    private _searchService: SearchService,
    private _dataRequest: DataRequestService,
    private _youTube: YouTubeApiService,
  ) {}

  onSettingClick() {
    this.settingClick.emit();
  }

  onSubmit(event: Event) {
    const Elem = event.target as HTMLInputElement;
    this._searchService.value = (event.target as HTMLInputElement).value;
    if (Elem.value.length <= 2) return;
    this._searchService.search(this.comingCards);
  }

  ngOnInit(): void {
    this._dataRequest.requestCards().subscribe({
      next: (value) => {
        this.comingCards = value;
      },
      error: (err) => {
        console.error('error', err);
      },
    });

    const searchInput = document.querySelector('.search-input') as HTMLInputElement;
    this._search$ = fromEvent(searchInput, 'input')
      .pipe(
        map((event: Event) => (event.target as HTMLInputElement).value),
        filter((targetValue: string) => targetValue.length >= this.minlength),
        debounce(() => interval(800)),
        distinctUntilChanged(),
      )
      .subscribe({
        next: (res) => {
          console.log(res);
        },
      });
  }
}
