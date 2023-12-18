import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DestaqueDirective } from './destaque.directive';
import { GaloRoucoComponent } from './galo-rouco/galo-rouco.component';
import { AnimacaoDirective } from './animacao.directive';

@NgModule({
  declarations: [
    AppComponent,
    DestaqueDirective,
    GaloRoucoComponent,
    AnimacaoDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
