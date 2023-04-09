import { Component, Input, OnInit } from '@angular/core';
import { EDateStatus } from 'src/@types/card.enums';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() url!: string;

  @Input() viewCount!: string;

  /** date string */
  @Input() publishDate!: string;

  @Input() likeCount!: string;

  @Input() dislikeCount!: string;

  @Input() commentCount!: string;

  @Input() title!: string;

  @Input() id!: string;

  bottomColor: EDateStatus = EDateStatus.low;

  constructor() {}

  ngOnInit(): void {}
}
