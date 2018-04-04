import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-administracion-peliculas',
  templateUrl: './administracion-peliculas.component.html',
  styleUrls: ['./administracion-peliculas.component.css']
})
export class AdministracionPeliculasComponent implements OnInit {

  constructor() { }

  ngOnInit() { 
  }



  //ACTIVACIONES SECCIONES
  agregarPeliculas = false;

  activarAgregarPeliculas(){
    this.ponerEnFalse();
    this.agregarPeliculas = true;  
  }
  editarPeliculas = false;
  activarEditarPeliculas(){
    this.ponerEnFalse();
    this.editarPeliculas = true;
      
  }

  ponerEnFalse() {
    this.agregarPeliculas = false;
    this.editarPeliculas = false;
  }
  
  //FIN ACTIVACIONES SECCIONES

}
