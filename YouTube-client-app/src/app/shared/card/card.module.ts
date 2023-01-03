import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { PublicationDateDirective } from './publication-date.directive';
import { RouterModule } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';

@NgModule({
  declarations: [CardComponent, PublicationDateDirective],
  imports: [CommonModule, RouterModule, AngularSvgIconModule],
  exports: [CardComponent, PublicationDateDirective],
})
export class CardModule {}
