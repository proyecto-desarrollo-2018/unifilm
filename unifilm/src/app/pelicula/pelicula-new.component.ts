import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-pelicula-new',
  templateUrl: './pelicula-new.component.html',
  styleUrls: ['./pelicula-new.component.css']
})
export class PeliculaNewComponent implements OnInit {

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

  clasificaciones = [{ clasificacion: ' AA  Todos los públicos pueden ver' },
    { clasificacion: 'A  Mayores de 6 años.' },
    { clasificacion: ' B  Para mayores de 12 años' },
    { clasificacion: ' B15  Para mayores de 15 años'},
    { clasificacion: 'C  Para adultos, apto para mayores de 18 años' },
    { clasificacion: ' D  Exclusivamente adultos' }];

  constructor() {
 

    console.log(this.clasificaciones);
    console.log(this.calificaciones);
    console.log(this.generos);


  }

 
  
  ngOnInit() {
  }

}
