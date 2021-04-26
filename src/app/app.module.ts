import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ConocenosComponent } from './components/conocenos/conocenos.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { ContactanosComponent } from './components/contactanos/contactanos.component';
import { TrabajaComponent } from './components/trabaja/trabaja.component';
import { ToyoComponent } from './components/toyo/toyo.component';
import { LieneaPComponent } from './components/lienea-p/lienea-p.component';
import { MulatosComponent } from './components/mulatos/mulatos.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    InicioComponent,
    ConocenosComponent,
    ServiciosComponent,
    ProyectosComponent,
    ContactanosComponent,
    TrabajaComponent,
    ToyoComponent,
    LieneaPComponent,
    MulatosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
