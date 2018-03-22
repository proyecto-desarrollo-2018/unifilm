import { Component, OnInit } from '@angular/core';
import { PeliculaService } from './pelicula.service';
import { Pelicula} from '../models/pelicula';

@Component({
  selector: 'app-pelicula-list',
  templateUrl: './pelicula-list.component.html',
  styleUrls: ['./pelicula-list.component.css'],
  providers: [PeliculaService]

})
export class PeliculaListComponent implements OnInit {
 
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
