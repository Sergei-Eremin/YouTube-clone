import { Component, OnInit } from '@angular/core';
import { ResponseItem } from 'src/@types/responseInterfaces';
import { DataRequestService } from 'src/app/services/data-request.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { format, formatDistance, formatRelative, subDays } from 'date-fns';

@Component({
  templateUrl: './card-page.component.html',
  styleUrls: ['./card-page.component.scss'],
})
export class CardPageComponent implements OnInit {
  viewCount: string = '';

  likeCount: string = '';

  dislikeCount: string = '';

  commentCount: string = '';

  image: string = '';

  description: string = '';

  title: string = '';

  date: string = '';

  constructor(
    private _dataRequest: DataRequestService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(async (params) => {
      const id = params.get('id');
      // console.log(params.id);

      const card = await this.findCard(id as string);

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
    });
  }

  async findCard(idParameter: string): Promise<ResponseItem> {
    const cards: ResponseItem[] = await this._dataRequest.request();

    return cards.find((elem) => elem.id === idParameter) as ResponseItem;
  }
}
