import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { ContatoComponent } from './contato/contato.component';
import { ListarPetComponent } from './listar-pet/listar-pet.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CorpoComponent } from './corpo/corpo.component';

const routes: Routes = [
  { path: 'corpo', component: CorpoComponent },
 
  { path: 'login', component: LoginComponent },
  { path: 'adicionarPet', component: FormularioComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'listarPet', component: ListarPetComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,

)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
