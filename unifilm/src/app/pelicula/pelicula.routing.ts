import { Routes, RouterModule } from '@angular/router';
import { PeliculaListComponent } from './pelicula-list.component';
import { PeliculaDetailComponent } from './pelicula-detail.component';
import { PeliculaNewComponent } from './pelicula-new.component';



export const PELICULA_ROUTES: Routes = [
    { path: '', component: PeliculaListComponent, pathMatch: 'full' },
    { path: 'new', component: PeliculaNewComponent },
    { path: ':id', component: PeliculaDetailComponent }


];

