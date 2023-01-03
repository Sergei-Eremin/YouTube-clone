import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardPageComponent } from './card-page.component';
import { PrevModule } from 'src/app/shared/svg-icon/prev/prev.module';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CardPageComponent],
  imports: [CommonModule, PrevModule, AngularSvgIconModule, RouterModule],
})
export class CardPageModule {}
