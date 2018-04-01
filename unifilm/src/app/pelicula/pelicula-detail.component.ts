import { Component, OnInit, OnDestroy, DoCheck } from '@angular/core';
import { Pelicula } from '../models/pelicula';
import { PeliculaService } from './pelicula.service';
import { ActivatedRoute } from '@angular/router';
import { Calificacion } from '../models/calificacion';
import { AuthService } from '../auth/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-pelicula-detail',
  templateUrl: './pelicula-detail.component.html',
  styleUrls: ['./pelicula-detail.component.css'],
  providers: [PeliculaService]

})
export class PeliculaDetailComponent implements OnInit, OnDestroy, DoCheck {

  pelicula?: Pelicula;
  loading = true;
  sub: any;
  calificacionForm: FormGroup;

  constructor(private peliculaService: PeliculaService, private route: ActivatedRoute,
    private authService: AuthService, public fb: FormBuilder) { 

    this.calificacionForm = this.fb.group({
      
      calificacion: ['', [Validators.required]],
      comentario: ['', []]

      });

      
    }

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

ngDoCheck(){
  console.log('pruebaHtml: ' + this.pelicula.urlPelicula);
}
 
calificar() {


  if (this.calificacionForm.valid) {
    const cali  = this.calificacionForm.get('calificacion').value;
    const com = this.calificacionForm.get('comentario').value;
    const calificacion = new Calificacion(null, cali, this.pelicula, null, com,null  );
 
    console.log('Calificacion: ' + JSON.stringify(calificacion));
  this.peliculaService.addCalificacion(calificacion)
    .subscribe(    
    this.authService.handleError
    );

    this.calificacionForm.reset();

}
}



  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
