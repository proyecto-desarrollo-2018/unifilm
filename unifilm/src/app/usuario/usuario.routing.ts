import { Routes, RouterModule } from '@angular/router';
import { UsuarioListComponent } from './usuario-list.component';
import { UsuarioDetailComponent } from './usuario-detail.component';
import { UsuarioNewComponent } from './usuario-new.component';



export const USUARIO_ROUTES: Routes = [
    { path: '', component: UsuarioListComponent, pathMatch: 'full' },
    { path: 'new', component: UsuarioNewComponent },
    { path: ':id', component: UsuarioDetailComponent }


];

