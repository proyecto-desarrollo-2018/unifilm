import { Routes, RouterModule } from '@angular/router';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { HomeClienteComponent } from './home/home-cliente.component';
import { USUARIO_ROUTES } from './usuario/usuario.routing';
import { PELICULA_ROUTES } from './pelicula/pelicula.routing';
import { UsuarioNewComponent } from './usuario/usuario-new.component';
import { SinginComponent } from './singin/singin.component';
import { SingupComponent } from './singup/singup.component';
import { PeliculaListComponent } from './pelicula/pelicula-list.component';
import { PeliculaNewComponent } from './pelicula/pelicula-new.component';
import { ReporteComponent } from './reporte/reporte.component';

const APP_ROUTES: Routes = [
    { path: '', component: PaginaPrincipalComponent, pathMatch: 'full'},
    { path: 'home-cliente', component: HomeClienteComponent },
    { path: 'pagina-principal', component: PaginaPrincipalComponent, pathMatch: 'full'},
    { path: 'usuarios', children: USUARIO_ROUTES },
    { path: 'peliculas', children: PELICULA_ROUTES },
    { path: 'singin', component: SinginComponent },
    { path: 'singup', component: SingupComponent },
    { path: 'reportes', component: ReporteComponent }





];

export const Routing = RouterModule.forRoot(APP_ROUTES);
