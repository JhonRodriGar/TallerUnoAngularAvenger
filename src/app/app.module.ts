import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Rutas
import {APP_ROUTING} from "./app.routes";

//Servicios
import {inicioService} from "./services/inicio.service";

import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { RankingComponent } from './componentes/ranking/ranking.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    RankingComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    inicioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
