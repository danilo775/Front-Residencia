import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ContatoComponent } from './contato/contato.component';
import { ListarPetComponent } from './listar-pet/listar-pet.component';
import { LoginComponent } from './login/login.component';
import { AutenticaInterceptor } from './autentica.interceptor';
import { CorpoComponent } from './corpo/corpo.component';


@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    FormularioComponent,
    ContatoComponent,
    ListarPetComponent,
    LoginComponent,
    CorpoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AutenticaInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
