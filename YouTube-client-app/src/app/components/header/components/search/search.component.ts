import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
import { DataRequestService } from 'src/app/services/data-request.service';
import { ResponseItem } from 'src/@types/responseInterfaces';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @Output() settingClick = new EventEmitter<void>();

  comingCards: ResponseItem[] = [];

  constructor(private _searchService: SearchService, private _dataRequest: DataRequestService) {}

  onSettingClick() {
    this.settingClick.emit();
  }

  onSubmit() {
    this._searchService.search(this.comingCards);
  }

  onValueChange(event: Event) {
    this._searchService.value = (event.target as HTMLInputElement).value;
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
