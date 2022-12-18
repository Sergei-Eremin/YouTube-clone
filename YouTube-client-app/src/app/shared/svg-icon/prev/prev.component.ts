import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prev',
  templateUrl: './prev.svg',
  styleUrls: ['./prev.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrevComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
