import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardPageComponent } from './card-page.component';
import { PrevModule } from 'src/app/shared/svg-icon/prev/prev.module';

@NgModule({
  declarations: [CardPageComponent],
  imports: [CommonModule, PrevModule],
})
export class CardPageModule {}
