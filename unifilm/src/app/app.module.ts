import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormularioLoginComponent } from './formulario-login/formulario-login.component';
import { FormularioRegistroComponent } from './formulario-registro/formulario-registro.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';


@NgModule({
  declarations: [
    AppComponent,
    FormularioLoginComponent,
    FormularioRegistroComponent,
    PaginaPrincipalComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
