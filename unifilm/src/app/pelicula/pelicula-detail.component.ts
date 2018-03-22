import { Component, OnInit, OnDestroy } from '@angular/core';
import { Pelicula } from '../models/pelicula';
import { PeliculaService } from './pelicula.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pelicula-detail',
  templateUrl: './pelicula-detail.component.html',
  styleUrls: ['./pelicula-detail.component.css'],
  providers: [PeliculaService]

})
export class PeliculaDetailComponent implements OnInit, OnDestroy {

  pelicula?: Pelicula;
  loading = true;
  sub: any;

  constructor(private peliculaService: PeliculaService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.peliculaService
        .getPelicula(params.id)
        .then((pelicula: Pelicula) => {
          this.pelicula = pelicula;
          this.loading = false;
        });
    });

}
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
