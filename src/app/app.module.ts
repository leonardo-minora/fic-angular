import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
