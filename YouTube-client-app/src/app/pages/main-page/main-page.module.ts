import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import { CardModule } from 'src/app/shared/card/card.module';
import { ListComponent } from './components/list/list.component';

@NgModule({
  declarations: [MainPageComponent, ListComponent],
  imports: [CommonModule, CardModule],
})
export class MainPageModule {}
