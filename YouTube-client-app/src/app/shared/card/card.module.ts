import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { PublicationDateDirective } from './publication-date.directive';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CardComponent, PublicationDateDirective],
  imports: [CommonModule, RouterModule],
  exports: [CardComponent, PublicationDateDirective],
})
export class CardModule {}
