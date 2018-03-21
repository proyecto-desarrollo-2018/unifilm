import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { Validaciones } from '../validaciones/validaciones';
import { Pelicula } from '../models/pelicula';
import { Director } from '../models/director';
import { Actor } from '../models/actor';


@Component({
  selector: 'app-pelicula-new',
  templateUrl: './pelicula-new.component.html',
  styleUrls: ['./pelicula-new.component.css']
})
export class PeliculaNewComponent implements OnInit {
  registro: FormGroup;

  generos = [
    { genero:  'Drama'},
    { genero:  'Comedia' },
    { genero:  'Acción' },
    { genero:  'Ciencia ficción ' },
    { genero:  'Fantasía' },
    { genero:  'Terror ' },
    { genero:  'Romance' },
    { genero:  'Musical ' },
    { genero:   'Melodrama' },
    { genero:  'Suspenso' },
    { genero:  'Histórico ' },
    { genero:  'Bélico ' },
    { genero:  'Policíaco' },
    { genero:  'Western ' },
    { genero:  'Animación ' },
    { genero:  'Para niños' },
    { genero:   'Cine arte' },
    { genero: 'Cine independiente'}];

  calificaciones = [{calificacion: 1},
    { calificacion: 2 },
    { calificacion: 3 },
    { calificacion: 4 },
    { calificacion: 5 },
    { calificacion: 6 },
    { calificacion: 7 },
    { calificacion: 8 },
    { calificacion: 9 },
    { calificacion: 10 }];

  producciones = [{ produccion: 'Director' },
  { produccion: 'Director de Arte' },
  { produccion: 'Director de sonido' },
  { produccion: 'Director de fotografia' },
  { produccion: 'Direcctor  de produccion' },
  { produccion: 'Director de Escenografia y Vesturario' }];

  clasificaciones = [{ clasificacion: ' AA  Todos los públicos pueden ver' },
    { clasificacion: 'A  Mayores de 6 años.' },
    { clasificacion: ' B  Para mayores de 12 años' },
    { clasificacion: ' B15  Para mayores de 15 años'},
    { clasificacion: 'C  Para adultos, apto para mayores de 18 años' },
    { clasificacion: ' D  Exclusivamente adultos' }];

  tipoActor = [{ tipoActor: 'Protagonista' },
  { tipoActor: 'Antagonista' },
  { tipoActor: 'Secundario' }];


  ngOnInit() {
  }

  constructor(public fb: FormBuilder
    ) {
    this.registro = this.fb.group({
      titulo: ['', [Validators.required, Validators.pattern("[a-zA-Z0-9-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,._'-]{4,20}")]],
      nombreD: ['', [Validators.required, Validators.pattern("[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ]{4,20}")]],
      apPaternoD: ['', [Validators.required, Validaciones.verificarEspacios, Validators.pattern("[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ]{4,20}")]],
      apMaternoD: ['', [Validators.required, Validaciones.verificarEspacios, Validators.pattern("[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ]{4,20}")]],
      director: ['', [Validators.required]],
      nombreA: ['', [Validators.required, Validaciones.verificarEspacios]],
      apPaternoA: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"), Validaciones.verificarEspacios]],
      apMaternoA: ['', [Validators.required]],
      tipoActor: ['', [Validators.required]],
      genero: ['', [Validators.required]],
      fechaProuccion: ['', [Validators.required]],
      sinopsis: ['', [Validators.required]],
      clasificacion: ['', [Validators.required]],
      duracion: ['', [Validators.required]],
      casaProductora: ['', [Validators.required]],
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
              fechaProuccion,
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
        genero,
        fechaProuccion,
        sinopsis,
        clasificacion,
        duracion,
        casaProductora,
        urlPortada,
        urlPelicula
      );

      alert('Pelicula agregada: ' + JSON.stringify(pelicula));

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
