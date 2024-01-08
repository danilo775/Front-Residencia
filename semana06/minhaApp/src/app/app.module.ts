import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabelaComponent } from './tabela/tabela.component';
import { AraraComponent } from './arara/arara.component';
import { FormsModule } from '@angular/forms';
import { PipeTestePipe } from './pipe-teste.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TabelaComponent,
    AraraComponent,
    PipeTestePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
