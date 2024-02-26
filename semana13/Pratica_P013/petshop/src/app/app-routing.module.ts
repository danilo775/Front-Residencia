import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { ContatoComponent } from './contato/contato.component';
import { ListarPetComponent } from './listar-pet/listar-pet.component';

const routes: Routes = [
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
