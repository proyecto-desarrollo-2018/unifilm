import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-home-cliente',
  templateUrl: './home-cliente.component.html',
  styleUrls: ['./home-cliente.component.css']
})
export class HomeClienteComponent implements OnInit {
  quienesSomos = false;
  compCatalogo = true;
  genero: string;
  tipoUsuario: string;

  constructor( private authService: AuthService ) { 
    this.genero = 'Todos';
  }

  ngOnInit() {
    this.tipoUsuario = this.authService.currentUser.tipoUsuario;
  }

  activarQuienesSomos() {
    this.quienesSomos = true;
    this.compCatalogo = false;


  }

  validarTipoUsuario(){
    if( this.tipoUsuario === 'administrador' || this.tipoUsuario === 'soporte' ) {
      return true;
    }

    return false;
  }


  getGenero(g: string) {   
    switch (g) {
      case 'Drama':
        this.genero = 'Drama';
          break;
      case 'Accion':
        this.genero = 'Accion';
        break;
      case 'Comedia':
        this.genero = 'Comedia';
        break;
      case 'Romance':
        this.genero = 'Romance';
        break;
      case 'Musical':
        this.genero = 'Musical';
        break;
      case 'Melodrama':
        this.genero = 'Melodrama';
        break;
      case 'Suspenso':
        this.genero = 'Suspenso';
        break;
      case 'Amor':
        this.genero = 'Amor';
        break;
      case 'Para niños':
        this.genero = 'Para niños';
        break;
      case 'Western':
        this.genero = 'Western';
        break;
      case 'Animacion':
        this.genero = 'Animacion';
        break;
      case 'Cine arte':
        this.genero = 'Cine arte';
        break;
      case 'Cine independiente':
        this.genero = 'Cine independiente';
        break;
      case 'Policíaco':
        this.genero = 'Policíaco';
        break;
      case 'Belico':
        this.genero = 'Belico';
        break;
      case 'Histórico':
        this.genero = 'Histórico';
        break;
      case 'Terror':
        this.genero = 'Terror';
        break;
      case 'Fantasía':
        this.genero = 'Fantasía';
        break;
      case 'Ciencia ficción':
        this.genero = 'Ciencia ficción';
        break;
      case 'Todos':
        this.genero = 'Todos';
        break;
      default :
        this.genero = 'Todos';
        break;
    }

    this.quienesSomos = false;
    this.compCatalogo = true;
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  fullName() {
    return this.authService.currentUser.nombre + ' ' + this.authService.currentUser.apellidoP  + ' ' + this.authService.currentUser.apellidoM ;

  }

  idUsuario(){
    return this.authService.currentUser._id;
  }


  logout() {
    this.authService.logout();
  }

}
