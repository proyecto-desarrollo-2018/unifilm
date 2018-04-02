import { Component, OnInit, Input , DoCheck} from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})
export class ReporteComponent implements OnInit, DoCheck{

  tipoUsuario: string;
   /** SECCIONES*/
   agregarPelicula = false;
   activarAgregarPeliculas(){
     this.ponerFalse();
     this.agregarPelicula = true;

   }

  agregarUsuario = false;
  activarAgregarUsuarios() {
    this.ponerFalse();
    this.agregarUsuario = true;
  }

  listaUsuario = false;
  activarListaUsuarios() {
    this.ponerFalse();
    this.listaUsuario = true;
  }


  ponerFalse(){
    this.agregarPelicula = false;
    this.agregarUsuario = false;
    this.listaUsuario = false;

  }
  /** FIN SECCIONES*/


  /** Graficas*/
  id = 'chart1';
  width = 600;
  height = 400;
  type = 'column2d';
  dataFormat = 'json';
  dataSource;
    /** FIN Graficas*/

  
  constructor(private authService: AuthService) {

    /** Graficas*/
    this.dataSource = {
      "chart": {
        "caption": "Harry's SuperMart",
        "subCaption": "Top 5 stores in last month by revenue",
        "numberprefix": "$",
        "theme": "fint"
      },
      "data": [
        {
          "label": "Bakersfield Central",
          "value": "880000"
        },
        {
          "label": "Garden Groove harbour",
          "value": "730000"
        },
        {
          "label": "Los Angeles Topanga",
          "value": "590000"
        },
        {
          "label": "Compton-Rancho Dom",
          "value": "520000"
        },
        {
          "label": "Daly City Serramonte",
          "value": "330000"
        }
      ]
    }
   }

  ngOnInit() {
    this.tipoUsuario = this.authService.currentUser.tipoUsuario;
  }

  ngDoCheck(){

  }


  isLoggedIn() {
    return this.authService.isLoggedIn();
  }
  logout() {
    this.authService.logout();
  }
}
