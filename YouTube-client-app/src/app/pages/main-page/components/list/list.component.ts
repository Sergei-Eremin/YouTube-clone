import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ResponseItem } from 'src/@types/responseInterfaces';
import { IFinalItem, IYouTubeResponseItems } from 'src/@types/youTubeSearchResponse';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent {
  @Input() items!: IFinalItem[];

  // constructor() {}

  public toDate(str: string) {
    return new Date(str);
  }
}
