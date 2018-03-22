import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { Validaciones } from '../validaciones/validaciones';
import { Pelicula } from '../models/pelicula';
import { Director } from '../models/director';
import { Actor } from '../models/actor';
import { PeliculaService } from './pelicula.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-pelicula-new',
  templateUrl: './pelicula-new.component.html',
  styleUrls: ['./pelicula-new.component.css'],
  providers: [PeliculaService]

})
export class PeliculaNewComponent implements OnInit {
  registro: FormGroup;
  ngOnInit() {
  }

  constructor(public fb: FormBuilder, private peliculaService: PeliculaService,
    private router: Router
    ) {
    this.registro = this.fb.group({
      titulo: ['', [Validators.required, Validators.pattern("[a-zA-Z0-9-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,._'-]{4,20}")]],
      nombreD: ['', [Validators.required, Validators.pattern("[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ]{4,20}")]],
      apPaternoD: ['', [Validators.required, Validaciones.verificarEspacios, Validators.pattern("[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ]{4,20}")]],
      apMaternoD: ['', [Validators.required, Validaciones.verificarEspacios, Validators.pattern("[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ]{4,20}")]],
      director: ['', [Validators.required]],
      nombreA: ['', [Validators.required, Validators.pattern("[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ]{4,20}")]],
      apPaternoA: ['', [Validators.required, Validaciones.verificarEspacios, Validators.pattern("[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ]{4,20}")]],
      apMaternoA: ['', [Validators.required, Validaciones.verificarEspacios, Validators.pattern("[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ]{4,20}")]],
      tipoActor: ['', [Validators.required]],
      genero: ['', [Validators.required]],
      fechaProduccion: ['', [Validators.required]],
      sinopsis: ['', [Validators.required, Validators.pattern("[a-zA-Z0-9-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,._'-]{10,1000}")]],
      clasificacion: ['', [Validators.required]],
      duracion: ['', [Validators.required, Validators.pattern("[0-9,]{3}")]],
      casaProductora: ['', [Validators.required, Validators.pattern("[a-zA-Z0-9-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,._'-]{4,20}")]],
      urlPortada: ['', [Validators.required]],
      urlPelicula: ['', [Validators.required]]
    });
  }
  onSubmit() {
    const idRa = (Math.random() * 100);
    const idS = idRa.toString();
    if (this.registro.valid) {
      const { titulo,
              nombreD,
              apPaternoD,
              apMaternoD,
              director,
              nombreA,
              apPaternoA,
              apMaternoA,
              tipoActor,
              genero,
             fechaProduccion,
              sinopsis,
              clasificacion,
              duracion,
              casaProductora,
              urlPortada,
              urlPelicula } = this.registro.value;
      const direc = new Director(
        null,
        nombreD,
        apPaternoD,
        apMaternoD,
        director);
      const act = new Actor(null,
        nombreA,
        apPaternoA,
        apMaternoA,
        tipoActor);


      const pelicula = new Pelicula(idS,
        titulo,
        [direc],
        [act],
        [genero],
        fechaProduccion,
        null,
        sinopsis,
        [clasificacion],
        duracion,
        casaProductora,
        null,
        urlPortada,
        urlPelicula
      );
      
      alert('Usuario agregado: ' + JSON.stringify(pelicula));
      this.peliculaService.addPelicula(pelicula)
        .subscribe(
          ({ idPelicula }) => this.router.navigate(['/peliculas'], idPelicula),
          error => console.log(error)
        );




      this.registro.reset();
    } else {
      console.log('Error en el formulario de pelicula');
    }
  }

  guardarPelicula() {
    //alert(JSON.stringify(this.registro.value));
    this.onSubmit();

  }


}
