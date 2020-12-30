import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NLPComponent } from './nlp/nlp.component';
import { ImprocComponent } from './improc/improc.component';

@NgModule({
  declarations: [
    AppComponent,
    NLPComponent,
    ImprocComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
