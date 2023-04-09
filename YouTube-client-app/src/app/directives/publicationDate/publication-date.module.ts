import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicationDateDirective } from './publication-date.directive';

@NgModule({
  declarations: [PublicationDateDirective],
  imports: [CommonModule],
  exports: [PublicationDateDirective],
})
export class PublicationDateModule {}
