import { Routes, RouterModule } from '@angular/router';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { HomeComponent } from './home/home.component';

const APP_ROUTES: Routes = [
    { path: '', component: PaginaPrincipalComponent, pathMatch: 'full'},
    { path: 'home', component: HomeComponent }


];

export const Routing = RouterModule.forRoot(APP_ROUTES);
