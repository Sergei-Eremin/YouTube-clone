import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
import { DataRequestService } from 'src/app/services/data-request.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @Output() settingClick = new EventEmitter<void>();

  constructor(private _searchService: SearchService, private _dataRequest: DataRequestService) {}

  onSettingClick() {
    this.settingClick.emit();
  }

  async onSubmit() {
    this._searchService.search(await this._dataRequest.request());
  }

  onValueChange(event: Event) {
    this._searchService.value = (event.target as HTMLInputElement).value;
  }

  ngOnInit(): void {}
}
