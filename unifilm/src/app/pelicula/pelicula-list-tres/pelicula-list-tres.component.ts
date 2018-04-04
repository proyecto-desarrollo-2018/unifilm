import { Component, OnInit, Input } from '@angular/core';
import { PeliculaService } from '../pelicula.service';
import { Pelicula } from '../../models/pelicula';

@Component({
  selector: 'app-pelicula-list-tres',
  templateUrl: './pelicula-list-tres.component.html',
  styleUrls: ['./pelicula-list-tres.component.css'],
  providers: [PeliculaService]

})
export class PeliculaListTresComponent implements OnInit {

  constructor(private peliculaService: PeliculaService) { }
  peliculas: Pelicula[];
  loading = true;

  idPelicula = 'no definido';


  ngOnInit() {
    this.peliculaService
      .getPeliculas()
      .then((peliculas: Pelicula[]) => {
        this.peliculas = peliculas;
        this.loading = false;
      });

  }

  editarPelicula = false;
  activarEditarPelicula(idPel) {
    this.editarPelicula = true;
    this.idPelicula = idPel;
    console.log('id usuario desde metodo:' + this.idPelicula);

  }

}