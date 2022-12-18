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
    title: 'Главная',
  },
  {
    path: 'main',
    component: MainPageComponent,
    title: 'Главная',
  },
  {
    path: 'card/:id',
    component: CardPageComponent,
    title: 'Карточка товара',
  },
  {
    path: '404',
    component: NotFoundComponent,
    title: 'not found',
  },
  { path: '**', redirectTo: '404', title: 'not found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
