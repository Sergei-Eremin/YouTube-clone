import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataRequestService } from 'src/app/services/data-request.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { format } from 'date-fns';
import { Observable, Subscription } from 'rxjs';
import { EDateStatus } from 'src/@types/card.enums';

@Component({
  templateUrl: './card-page.component.html',
  styleUrls: ['./card-page.component.scss'],
})
export class CardPageComponent implements OnInit, OnDestroy {
  viewCount: string = '';

  likeCount: string = '';

  dislikeCount: string = '';

  commentCount: string = '';

  image: string = '';

  description: string = '';

  title: string = '';

  date: string = '';

  publishDate: string = '';

  bottomColor: EDateStatus = EDateStatus.high;

  private _sub = new Subscription();

  constructor(private _dataRequest: DataRequestService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this._sub.add(
      this.route.params
        .pipe(switchMap(({ id }) => this._dataRequest.requestCard(id)))
        .subscribe((card) => {
          if (!card) {
            return;
          }

          this.viewCount = card?.statistics.viewCount;
          this.likeCount = card?.statistics.likeCount;
          this.dislikeCount = card?.statistics.dislikeCount;
          this.commentCount = card?.statistics.commentCount;
          this.image = card?.snippet.thumbnails.high.url;
          this.description = card?.snippet.description;
          this.title = card?.snippet.title;
          this.date = `
          ${format(new Date(card?.snippet.publishedAt), 'iiii')},
          ${format(new Date(card?.snippet.publishedAt), 'LLLL')}
          ${format(new Date(card?.snippet.publishedAt), 'dd')}
          ${format(new Date(card?.snippet.publishedAt), 'yyyy')}
        `;
          console.log(card?.snippet.publishedAt, 'в стриме');
          this.publishDate = card?.snippet.publishedAt;
        }),
    );
    console.log(this.publishDate, 'publishDate после стрима');
  }

  ngOnDestroy(): void {
    this._sub.unsubscribe();
  }
}
