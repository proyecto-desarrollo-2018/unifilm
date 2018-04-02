import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { Validaciones } from '../validaciones/validaciones';
import { Pelicula } from '../models/pelicula';
import { Director } from '../models/director';
import { Actor } from '../models/actor';
import { PeliculaService } from './pelicula.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';



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
    private authService: AuthService,
    private router: Router
    ) {
    this.registro = this.fb.group({
      titulo: ['', [Validators.required, Validators.pattern("[a-zA-Z0-9-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,._'-]{4,20}")]],
      nombreD: ['', [Validators.required, Validators.pattern("[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ]{4,20}")]],
      apPaternoD: ['', [Validators.required, Validaciones.verificarEspacios, Validators.pattern("[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ]{4,20}")]],
      apMaternoD: ['', [Validaciones.verificarEspacios, Validators.pattern("[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ]{4,20}")]],
      director: ['', [Validators.required]],
      nombreA: ['', [Validators.required, Validators.pattern("[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ]{4,20}")]],
      apPaternoA: ['', [Validators.required, Validaciones.verificarEspacios, Validators.pattern("[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ]{4,20}")]],
      apMaternoA: ['', [Validaciones.verificarEspacios, Validators.pattern("[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ]{4,20}")]],
      tipoActor: ['', [Validators.required]],
      genero: ['', [Validators.required]],
      anioProduccion: ['', [Validators.required]],
      sinopsis: ['', [Validators.required]],
      clasificacion: ['', [Validators.required]],
      duracion: ['', [Validators.required, Validators.pattern("[0-9,]{3}")]],
      casaProductora: ['', [Validators.required, Validators.pattern("[a-zA-Z0-9-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,._'-]{4,20}")]],
      urlPortada: ['', [Validators.required]],
      urlPelicula: ['', [Validators.required]]
    });
  }
  onSubmit() {
    if ( !this.authService.isLoggedIn()) {
      alert('Para agregar pelculas debes estar logeado');
      this.router.navigateByUrl('/singin');
    }

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
        anioProduccion,
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


      const pelicula = new Pelicula(null,
        titulo,
        direc,
        act,
        genero,
        anioProduccion,
        null,
        sinopsis,
        clasificacion,
        duracion,
        casaProductora,
        [],
        urlPortada,
        urlPelicula,
        null
      );

      this.peliculaService.addPelicula(pelicula)
        .subscribe(
        //({ _id }) => this.router.navigate(['/home-cliente'] ),
          this.authService.handleError
        );
        alert('Pelicula Guardada exitosamente') ;




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
