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


}
