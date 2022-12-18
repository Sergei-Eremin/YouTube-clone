import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundModule } from './pages/not-found/not-found.module';
import { CardPageModule } from './pages/card-page/card-page.module';
import { MainPageModule } from './pages/main-page/main-page.module';
import { HeaderModule } from './components/header/header.module';
import { DataRequestService } from './services/data-request.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NotFoundModule,
    CardPageModule,
    MainPageModule,
    HeaderModule,
    HttpClientModule,
  ],
  providers: [DataRequestService],
  bootstrap: [AppComponent],
})
export class AppModule {}
