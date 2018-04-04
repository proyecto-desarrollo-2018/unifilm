import { Component, OnInit, Input } from '@angular/core';
import { PeliculaService } from '../pelicula.service';
import { Pelicula } from '../../models/pelicula';

@Component({
  selector: 'app-pelicula-list-dos',
  templateUrl: './pelicula-list-dos.component.html',
  styleUrls: ['./pelicula-list-dos.component.css'],
  providers: [PeliculaService]

}) 
export class PeliculaListDosComponent implements OnInit {

  constructor(private peliculaService: PeliculaService) { }
  peliculas: Pelicula[];
  loading = true;

  ngOnInit() {
    this.peliculaService
      .getPeliculas()
      .then((peliculas: Pelicula[]) => {
        this.peliculas = peliculas;
        this.loading = false;
      });

  }

}