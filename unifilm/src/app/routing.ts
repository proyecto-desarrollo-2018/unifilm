import { Routes, RouterModule } from '@angular/router';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { HomeClienteComponent } from './home/home-cliente.component';
import { USUARIO_ROUTES } from './usuario/usuario.routing';
import { UsuarioNewComponent } from './usuario/usuario-new.component';
import { SinginComponent } from './singin/singin.component';
import { SingupComponent } from './singup/singup.component';
import { PeliculaListComponent } from './pelicula/pelicula-list.component';
import { PeliculaNewComponent } from './pelicula/pelicula-new.component';


const APP_ROUTES: Routes = [
    { path: '', component: PaginaPrincipalComponent, pathMatch: 'full'},
    { path: 'home-cliente', component: HomeClienteComponent },
    { path: 'pagina-principal', component: PaginaPrincipalComponent, pathMatch: 'full'},
    { path: 'usuarios', children: USUARIO_ROUTES },
    { path: 'singin', component: SinginComponent },
    { path: 'singup', component: SingupComponent },
    { path: 'pelicula-list', component: PeliculaListComponent },
    { path: 'pelicula-new', component: PeliculaNewComponent}




];

export const Routing = RouterModule.forRoot(APP_ROUTES);
