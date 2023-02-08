import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ElementRef,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
import { DataRequestService } from 'src/app/services/data-request.service';
import { ResponseItem } from 'src/@types/responseInterfaces';
import { YouTubeApiService } from 'src/app/services/you-tube-api.service';
import { fromEvent, map, filter, debounce, interval, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit, AfterViewInit {
  @ViewChild('inputElement') inputElementRef?: ElementRef<HTMLInputElement>;

  @Output() settingClick = new EventEmitter<void>();

  comingCards: ResponseItem[] = [];

  // private _search$: any;

  minlength = 3;

  constructor(
    private _searchService: SearchService,
    private _dataRequest: DataRequestService,
    private _youTube: YouTubeApiService,
  ) {}

  onSettingClick() {
    this.settingClick.emit();
  }

  private _onSubmit(event: Event) {
    console.log('onSubmit', event);
    const Elem = event.target as HTMLInputElement;
    this._searchService.value = (event.target as HTMLInputElement).value;
    if (Elem.value.length <= 2) return;
    this._searchService.search(this.comingCards);
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
}
