import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [HeaderComponent, ProfileComponent, SearchComponent],
  imports: [CommonModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
