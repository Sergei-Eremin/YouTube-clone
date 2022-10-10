import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { differenceInWeeks } from 'date-fns';
import { EDateStatus } from './card.enums';

@Directive({
  selector: '[appPublicationDate]',
})
export class PublicationDateDirective implements OnInit {
  @Input() appPublicationDate!: string;

  constructor(private el: ElementRef) {
    console.log(this);
  }

  ngOnInit() {
    const diff = differenceInWeeks(new Date(), new Date(this.appPublicationDate));
    console.log(diff);

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
