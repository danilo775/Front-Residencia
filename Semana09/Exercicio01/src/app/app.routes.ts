import { Routes } from '@angular/router';
import { NoticiasComponent } from './noticias/noticias.component';
import { ServicosComponent } from './servicos/servicos.component';
import { IniciarComponent } from './iniciar/iniciar.component';

export const routes: Routes = [
    {path: 'iniciar', component: IniciarComponent},
    {path : 'noticias', component: NoticiasComponent},
    {path : 'servicos', component: ServicosComponent},
];
