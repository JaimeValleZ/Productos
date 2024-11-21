import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaComponent } from './usuario/lista.component';
import { DetalleComponent } from './usuario/detalle.component';
import { CrearComponent } from './usuario/crear.component';
import { ModificarComponent } from './usuario/modificar.component';

const routes: Routes = [
  {path: '', component: ListaComponent},
  {path: 'detalle/:codigo', component: DetalleComponent},
  {path: 'crear', component: CrearComponent},
  {path: 'modificar/:codigo', component: ModificarComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
