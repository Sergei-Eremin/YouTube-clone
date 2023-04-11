import { Directive, ElementRef, Input } from '@angular/core';
import { differenceInWeeks } from 'date-fns';
import { EDateStatus } from 'src/@types/card.enums';

@Directive({
  selector: '[appPublicationDate]',
})
export class PublicationDateDirective {
  @Input() appPublicationDate!: Date;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    const diff = differenceInWeeks(new Date(), this.appPublicationDate);

    if (diff < 1) {
      this.el.nativeElement.style.backgroundColor = EDateStatus.low;
    }
    if (diff > 1 || diff <= 4) {
      this.el.nativeElement.style.backgroundColor = EDateStatus.medium;
    }
    if (diff > 4 || diff <= 24) {
      this.el.nativeElement.style.backgroundColor = EDateStatus.high;
    }
    if (diff > 24) {
      this.el.nativeElement.style.backgroundColor = EDateStatus.extraHigh;
    }
  }
}
