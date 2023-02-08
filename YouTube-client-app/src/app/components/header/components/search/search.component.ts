import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ElementRef,
  ViewChild,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
import { DataRequestService } from 'src/app/services/data-request.service';
import { ResponseItem } from 'src/@types/responseInterfaces';
import {
  fromEvent,
  map,
  filter,
  debounce,
  interval,
  distinctUntilChanged,
  Subscription,
} from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit, AfterViewInit, OnDestroy {
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
        )
        .subscribe({
          next: (res) => {
            console.log(res);
            this._searchService.search(this.comingCards);
          },
        });

      this._sub.add(sub);
    } else {
      console.error('inputElementRef not exist');
    }
  }

  @Output() settingClick = new EventEmitter<void>();

  comingCards: ResponseItem[] = [];

  minlength = 3;

  constructor(private _searchService: SearchService, private _dataRequest: DataRequestService) {}

  onSettingClick() {
    this.settingClick.emit();
  }

  ngAfterViewInit(): void {
    const inputElement = this.inputElementRef?.nativeElement;

    if (inputElement) {
      fromEvent(inputElement, 'input')
        .pipe(
          map((event: Event) => (event.target as HTMLInputElement).value),
          filter((targetValue: string) => targetValue.length >= this.minlength),
          debounce(() => interval(800)),
          distinctUntilChanged(),
        )
        .subscribe({
          next: (res) => {
            console.log(res);
            this._searchService.search(this.comingCards);
          },
        });
    } else {
      console.error('this.inputElementRef not exist');
    }
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
  }

  ngOnDestroy(): void {
    this._sub.unsubscribe();
  }
}
