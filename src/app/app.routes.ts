import {RouterModule, Routes} from "@angular/router";
import {InicioComponent} from "./componentes/inicio/inicio.component";
import {RankingComponent} from "./componentes/ranking/ranking.component";
import {IniciologoComponent} from "./componentes/iniciologo/iniciologo.component";

const APP_ROUTES: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'ranking', component: RankingComponent },
  { path: 'inicioLogo', component: IniciologoComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'inicio' },
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
