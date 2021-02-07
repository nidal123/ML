import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NLPComponent } from './nlp/nlp.component';
import { ImprocComponent } from './improc/improc.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './home/home.component';
import { TimeseriesComponent } from './timeseries/timeseries.component';

@NgModule({
  declarations: [
    AppComponent,
    NLPComponent,
    ImprocComponent,
    HomeComponent,
    TimeseriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
