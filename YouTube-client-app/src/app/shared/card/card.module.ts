import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { RouterModule } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { PublicationDateModule } from 'src/app/directives/publicationDate/publication-date.module';

@NgModule({
  declarations: [CardComponent],
  imports: [CommonModule, RouterModule, AngularSvgIconModule, PublicationDateModule],
  exports: [CardComponent],
})
export class CardModule {}
