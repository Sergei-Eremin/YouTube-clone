import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataRequestService } from 'src/app/services/data-request.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { format } from 'date-fns';
import { Observable, Subscription } from 'rxjs';
import { EDateStatus } from 'src/@types/card.enums';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

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

  videoLink: string = ``;

  videoImage: string | undefined = ``;

  publishDate?: Date;

  bottomColor: EDateStatus = EDateStatus.high;

  private _sub = new Subscription();

  constructor(
    private _dataRequest: DataRequestService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
  ) {}

  safeUrl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
    `https://www.youtube.com/embed/${this.videoLink}&origin=https://www.youtube.com`,
  );

  ngOnInit(): void {
    this._sub.add(
      this.route.params
        .pipe(
          switchMap(async ({ id }) => {
            const CARD = this._dataRequest.requestCard(id);
            this.videoLink = id;
            this.videoImage =
              CARD?.snippet.thumbnails.maxres?.url || CARD?.snippet.thumbnails.default?.url;

            console.log(this.videoImage);

            return this._dataRequest.requestCard(id);
          }),
        )
        .subscribe((card) => {
          if (!card) {
            return;
          }
          const publishedAtDate = new Date(card?.snippet.publishedAt);
          this.viewCount = card?.statistics.viewCount;
          this.likeCount = card?.statistics.likeCount;
          // this.dislikeCount = card?.statistics.dislikeCount;
          this.commentCount = card?.statistics.commentCount;
          this.image = card?.snippet.thumbnails.high.url;
          this.description = card?.snippet.description;
          this.title = card?.snippet.title;
          this.date = `
          ${format(publishedAtDate, 'iiii')},
          ${format(publishedAtDate, 'LLLL')}
          ${format(publishedAtDate, 'dd')}
          ${format(publishedAtDate, 'yyyy')}
        `;
          this.publishDate = publishedAtDate;
        }),
    );
  }

  ngOnDestroy(): void {
    this._sub.unsubscribe();
  }

  createIframe() {
    const iframe = document.createElement('iframe');
    iframe.setAttribute('title', 'YouTube video player');
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute(
      'allow',
      'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share',
    );
    iframe.setAttribute('allowfullscreen', 'true');

    return iframe;
  }

  onClickToVideo() {
    const video = document.querySelector('.video') as HTMLElement;
    video.innerHTML = '';
    const iframe = this.createIframe();
    video.append(iframe);
    iframe.setAttribute('class', 'iframe');
    iframe.setAttribute(
      'src',
      `https://www.youtube.com/embed/${this.videoLink}&origin=https://www.youtube.com`,
    );
  }
}
