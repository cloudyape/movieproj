import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule }    from '@angular/common/http';
import { AppComponent } from './app.component';
//import {NgbPaginationModule, NgbAlertModule, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MovieMainComponent } from './movie-main/movie-main.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieMainComponent,
    //NgbActiveModal
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    //NgbActiveModal,
    //NgbPaginationModule,
    //NgbAlertModule,
    HttpClientModule
  ],
  providers: [ /*NgbActiveModal*/],
  bootstrap: [AppComponent],
})
export class AppModule { }
