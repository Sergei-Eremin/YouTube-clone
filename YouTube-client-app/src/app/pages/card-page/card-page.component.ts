import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './card-page.component.html',
  styleUrls: ['./card-page.component.scss'],
})
export class CardPageComponent implements OnInit {
  constructor() {
    let data: IBaseResponse | undefined = undefined;

    console.log(data);
  }

  ngOnInit(): void {}
}
