import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() img!: string;

  @Input() title!: string;

  @Input() views!: number;

  @Input() likes!: number;

  @Input() dislikes!: number;

  @Input() share!: number;

  get data() {
    return JSON.stringify(this);
  }

  constructor() {}

  ngOnInit(): void {}
}
