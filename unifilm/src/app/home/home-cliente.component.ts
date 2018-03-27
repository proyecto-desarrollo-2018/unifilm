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
  constructor( private authService: AuthService ) { 
    this.genero = 'Todos';
  }

  ngOnInit() {
  }

  activarQuienesSomos() {
    this.quienesSomos = true;
    this.compCatalogo = false;
  }

  getGenero(g: string) {

    switch (g) {
      case 'Accion':
        this.genero = 'Accion';
          break;
      case 'Amor':
        this.genero = 'Amor';
        break;
      case 'Comedia':
        this.genero = 'Comedia';
        break;
      case 'Drama':
        this.genero = 'Drama';
        break;
      case 'Terror':
        this.genero = 'Terror';
        break;
      case 'Series':
        this.genero = 'Series';
        break;
      case 'Todos':
        this.genero = 'Todos';
        break;
      default :
        this.genero = 'Todos';
        break;
    }

    console.log('genero: ' + this.genero);


  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  fullName() {
    return this.authService.currentUser.nombre + ' ' + this.authService.currentUser.apellidoP  + ' ' + this.authService.currentUser.apellidoM ;
  }

  logout() {
    this.authService.logout();
  }

}
