import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculaService } from '../pelicula.service';
import { Pelicula } from '../../models/pelicula';

@Component({
  selector: 'app-pelicula-detail-dos',
  templateUrl: './pelicula-detail-dos.component.html',
  styleUrls: ['./pelicula-detail-dos.component.css'],
  providers: [PeliculaService]

})
export class PeliculaDetailDosComponent implements OnInit {
  pelicula?: Pelicula;
  loading = true;
  sub: any;

 
  @Input() idPelicula: string;


  constructor(private peliculaService: PeliculaService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.peliculaService
        .getPelicula(this.idPelicula)
        .then((pelicula: Pelicula) => {
          this.pelicula = pelicula;
          this.loading = false;
        });
    });
    console.log('id pelicula: ' + this.idPelicula);

  }

  ngOnDestroy() {
    this.sub.unsubscribe();  
  }


  //ACTIVAR MODULOS
  editarDatosPelicula = false;
  activarEditarDatos() {
    this.ponerEnFalse();
    this.editarDatosPelicula = true;
  }
  editarDirectores = false;
  activarEditarDirectores() {
    this.ponerEnFalse();
    this.editarDirectores = true;
  }
 editarActores  = false;
  activarEditarActores(){
    this.ponerEnFalse();
    this.editarActores = true;
  }
editarGeneros = false;
  activarEditarGeneros(){
    this.ponerEnFalse();
    this.editarGeneros = true;
  }
editarClasificaciones = false;
  activarEditarClasificaciones(){
    this.ponerEnFalse();
    this.editarClasificaciones = true;
  }


  
  
  
  
  agregarDirectores = false;
  activarAgregarDirectores() {
    this.ponerEnFalse();
    this.agregarDirectores = true;
  }
  agregarActores = false;
  activarAgregarActores() {
    this.ponerEnFalse();
    this.agregarActores = true;
  }
  agregarGeneros = false;
  activarAgregarGeneros() {
    this.ponerEnFalse();
    this.agregarGeneros = true;
  }
  agregarClasificaciones = false;
  activarAgregarClasificaciones() {
    this.ponerEnFalse();
    this.agregarClasificaciones = true;
  }






  ponerEnFalse() {
    this.editarDatosPelicula = false;
    this.editarDirectores = false;
    this.editarActores = false;
    this.editarGeneros = false;
    this.editarClasificaciones = false;
    
    this.agregarDirectores = false;
    this.agregarActores = false;
    this.agregarGeneros = false;
    this.agregarClasificaciones = false;

 }

  //FIN ACTIVAR MODULOS


}
