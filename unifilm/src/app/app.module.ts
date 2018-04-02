import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
/*Graficas*/
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as FintTheme from 'fusioncharts/themes/fusioncharts.theme.fint';
import { FusionChartsModule } from 'angular4-fusioncharts';
FusionChartsModule.fcRoot(FusionCharts, Charts, FintTheme);






import { AppComponent } from './app.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { Routing } from './routing';
import { HomeClienteComponent } from './home/home-cliente.component';
import { HomeAdminComponent } from './home/home-admin.component';
import { UsuarioListComponent } from './usuario/usuario-list.component';
import { UsuarioDetailComponent } from './usuario/usuario-detail.component';
import { UsuarioNewComponent } from './usuario/usuario-new.component';
import { SinginComponent } from './singin/singin.component';
import { SingupComponent } from './singup/singup.component';
import { PeliculaNewComponent } from './pelicula/pelicula-new.component';
import { PeliculaListComponent } from './pelicula/pelicula-list.component';
import { PeliculaDetailComponent } from './pelicula/pelicula-detail.component';
import { AuthService } from './auth/auth.service';
import { ReporteComponent } from './reporte/reporte.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginaPrincipalComponent,
    HomeClienteComponent,
    HomeAdminComponent,
    UsuarioListComponent,
    UsuarioDetailComponent,
    UsuarioNewComponent,
    SinginComponent,
    SingupComponent,
    PeliculaNewComponent,
    PeliculaListComponent,
    PeliculaDetailComponent,
    ReporteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    Routing,
    HttpModule,
    FusionChartsModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
  schemas: []
})
export class AppModule { }
