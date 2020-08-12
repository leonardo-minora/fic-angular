import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FalhaComponent } from './falha/falha.component';
import { SucessoComponent } from './sucesso/sucesso.component';

@NgModule({
  declarations: [
    AppComponent,
    FalhaComponent,
    SucessoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
