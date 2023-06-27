import { Component, HostListener, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataRequestService } from 'src/app/services/data-request.service';
import { SearchService } from 'src/app/services/search.service';

@Component({
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  pageToken = '';

  private _sub = new Subscription();

  constructor(public searchService: SearchService, private _dataRequest: DataRequestService) {}

  ngOnInit(): void {}

  getPageHeight(): number {
    const scrollHeight = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight,
    );
    return scrollHeight;
  }

  @HostListener('window: scroll')
  onScroll() {
    if (window.innerHeight + window.scrollY >= this.getPageHeight()) {
      const $nextPage = this._dataRequest.nextPageRequestYouTubeCards(this.searchService.value);

      const nextPageSub = $nextPage.subscribe((res) => {
        const newCards = [...this.searchService.cards, ...res.items];
        this.searchService.cards = newCards;
      });
      this._sub.add(nextPageSub);
      // this._sub.unsubscribe();
    }
  }
}
