import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CabecalhoComponent, FalhaComponent,  RodapeComponent, SucessoComponent, TarefaComponent } from './components';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    FalhaComponent,
    RodapeComponent,
    SucessoComponent,
    TarefaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
