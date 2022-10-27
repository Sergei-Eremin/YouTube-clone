import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SearchComponent } from './components/search/search.component';
import { SortingComponent } from './components/sorting/sorting.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, ProfileComponent, SearchComponent, SortingComponent],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
