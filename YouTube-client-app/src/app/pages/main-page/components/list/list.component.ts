import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ResponseItem } from 'src/@types/responseInterfaces';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent {
  @Input() items!: ResponseItem[];

  // constructor() {}

  public toDate(str: string) {
    console.log('%ctoDate', 'font-size:50px', str);
    return new Date(str);
  }
}
