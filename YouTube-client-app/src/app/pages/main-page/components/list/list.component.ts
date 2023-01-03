import { Component, Input, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit, OnChanges {
  @Input() items!: any[];

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(): void {}
}
