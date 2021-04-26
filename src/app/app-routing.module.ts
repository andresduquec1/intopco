import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { ConocenosComponent } from './components/conocenos/conocenos.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { ContactanosComponent } from './components/contactanos/contactanos.component';
import { TrabajaComponent } from './components/trabaja/trabaja.component';
import { ToyoComponent } from './components/toyo/toyo.component';
import { LieneaPComponent } from './components/lienea-p/lienea-p.component';
import { MulatosComponent } from './components/mulatos/mulatos.component';


const routes: Routes = [

  { path: 'inicio', component: InicioComponent},
  { path: 'conocenos', component: ConocenosComponent},
  { path: 'servicios', component: ServiciosComponent},
  { path: 'proyectos', component: ProyectosComponent},
  { path: 'contactanos', component: ContactanosComponent},
  { path: 'trabaja', component: TrabajaComponent},
  { path: 'toyo', component: ToyoComponent},
  { path: 'linea-p', component: LieneaPComponent},
  { path: 'mulatos', component: MulatosComponent},
  { path: ' ', pathMatch: 'full', redirectTo: 'inicio'},
  { path: '**', pathMatch: 'full', redirectTo: 'inicio'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
