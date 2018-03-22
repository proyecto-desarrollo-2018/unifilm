import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home-cliente',
  templateUrl: './home-cliente.component.html',
  styleUrls: ['./home-cliente.component.css']
})
export class HomeClienteComponent implements OnInit {
  quienesSomos = false;
  compCatalogo = true;
  genero: string;
  constructor() { 
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
      case 'Nopor':
        this.genero = 'Nopor';
        break;
      default :
        this.genero = 'No se selecciono genero';
        break;
    }

    console.log('genero: ' + this.genero);


  }

}
