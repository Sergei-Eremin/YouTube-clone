import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { PublicationDateDirective } from './publication-date.directive';

@NgModule({
  declarations: [CardComponent, PublicationDateDirective],
  imports: [CommonModule],
  exports: [CardComponent, PublicationDateDirective],
})
export class CardModule {}
