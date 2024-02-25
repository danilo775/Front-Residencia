import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormularioComponent } from './Componets/formulario/formulario.component';
import { Form2Component } from './Componets/form2/form2.component';
import { EmailValidatorDirective } from './Componets/formulario/directives/email-validator.directive';
@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    Form2Component,
    EmailValidatorDirective,
    FormularioComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule

  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
