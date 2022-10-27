import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardPageComponent } from './pages/card-page/card-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full',
    title: 'главная',
  },
  {
    path: 'main',
    component: MainPageComponent,
    title: 'главная',
  },
  {
    path: 'card/:id',
    component: CardPageComponent,
    title: 'йопта карточка',
  },
  {
    path: '404',
    component: NotFoundComponent,
    title: 'не найдено',
  },
  { path: '**', redirectTo: '404', title: 'не найдено' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
