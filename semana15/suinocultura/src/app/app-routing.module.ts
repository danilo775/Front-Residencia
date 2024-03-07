import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SuinoComponent } from './components/suino/suino.component';
import { SuinoFormComponent } from './components/suino-form/suino-form.component';
import { SuinoEditarComponent } from './components/suino-editar/suino-editar.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'listarSuinos', component: SuinoComponent},
  { path:'adicionarSuinos', component: SuinoFormComponent},
  { path: 'editarSuino/:id', component: SuinoEditarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
