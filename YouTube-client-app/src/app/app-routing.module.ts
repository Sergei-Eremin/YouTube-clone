import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './guards/login.guard';
import { CardPageComponent } from './pages/card-page/card-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
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
    canActivate: [LoginGuard],
  },
  {
    path: 'login',
    component: LoginPageComponent,
    title: 'Регистрация',
  },
  {
    path: 'card/:id',
    component: CardPageComponent,
    title: 'Карточка товара',
    canActivate: [LoginGuard],
  },
  {
    path: '404',
    component: NotFoundComponent,
    title: 'not found',
    canActivate: [LoginGuard],
  },
  { path: '**', redirectTo: '404', title: 'not found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
