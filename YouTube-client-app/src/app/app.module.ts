import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundModule } from './pages/not-found/not-found.module';
import { CardPageModule } from './pages/card-page/card-page.module';
import { MainPageModule } from './pages/main-page/main-page.module';
import { HeaderModule } from './components/header/header.module';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { FormsModule } from '@angular/forms';
import { LoginPageModule } from './pages/login-page/login-page.module';
import { AdminPageModule } from './pages/admin-page/admin-page.module';
import { PublicationDateModule } from './directives/publicationDate/publication-date.module';

// import { StoreModule } from '@ngrx/store';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NotFoundModule,
    CardPageModule,
    MainPageModule,
    FormsModule,
    HeaderModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot(),
    LoginPageModule,
    PublicationDateModule,
    AdminPageModule,
    // StoreModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
