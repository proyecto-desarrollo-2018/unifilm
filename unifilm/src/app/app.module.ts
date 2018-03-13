import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    SingupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    Routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
