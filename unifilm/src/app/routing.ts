import { Routes, RouterModule } from '@angular/router';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { HomeClienteComponent } from './home/home-cliente.component';
import { USUARIO_ROUTES } from './usuario/usuario.routing';
import { UsuarioNewComponent } from './usuario/usuario-new.component';
import { SinginComponent } from './singin/singin.component';
import { SingupComponent } from './singup/singup.component';

const APP_ROUTES: Routes = [
    { path: '', component: PaginaPrincipalComponent, pathMatch: 'full'},
    { path: 'home-cliente', component: HomeClienteComponent },
    { path: 'pagina-principal', component: PaginaPrincipalComponent, pathMatch: 'full'},
    { path: 'usuarios', children: USUARIO_ROUTES },
    { path: 'usuario-new', component: UsuarioNewComponent },
    { path: 'singin', component: SinginComponent },
    { path: 'singup', component: SingupComponent }



];

export const Routing = RouterModule.forRoot(APP_ROUTES);
