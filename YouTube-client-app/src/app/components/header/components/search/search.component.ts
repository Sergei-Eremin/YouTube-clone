import { Component, EventEmitter, Output, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
import { DataRequestService } from 'src/app/services/data-request.service';
import {
  fromEvent,
  map,
  filter,
  debounce,
  interval,
  distinctUntilChanged,
  Subscription,
  switchMap,
} from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnDestroy {
  private _sub = new Subscription();

  @ViewChild('inputElement') set inputElementRef(
    elementRef: ElementRef<HTMLInputElement> | undefined,
  ) {
    const inputElement = elementRef?.nativeElement;

    if (inputElement) {
      const sub = fromEvent(inputElement, 'input')
        .pipe(
          map((event: Event) => (event.target as HTMLInputElement).value),
          filter((targetValue: string) => targetValue.length >= this.minlength),
          debounce(() => interval(800)),
          distinctUntilChanged(),
          switchMap((str) => {
            this._searchService.value = str;
            return this._dataRequest.requestYouTubeCards(str);
          }),
        )
        .subscribe({
          next: (res) => {
            this._searchService.search(res);
          },
          error: (error) => {
            console.log(error, 'ошибка в событии');
          },
        });

      this._sub.add(sub);
    } else {
      console.error('inputElementRef not exist');
    }
  }

  @Output() settingClick = new EventEmitter<void>();

  minlength = 3;

  constructor(private _searchService: SearchService, private _dataRequest: DataRequestService) {}

  onSettingClick() {
    this.settingClick.emit();
  }

  ngOnDestroy(): void {
    this._sub.unsubscribe();
  }
}
