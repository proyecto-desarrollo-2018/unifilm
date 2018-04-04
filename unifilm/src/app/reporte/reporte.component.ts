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

  listaPelicula = false;
  activarListaPeliculas() {
    this.ponerFalse();
    this.listaPelicula = true;
  }


  ponerFalse(){
    this.agregarPelicula = false;
    this.agregarUsuario = false;
    this.listaUsuario = false;
    this.listaPelicula = false;


  }
  /** FIN SECCIONES*/



  
  constructor(private authService: AuthService) {

   
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
