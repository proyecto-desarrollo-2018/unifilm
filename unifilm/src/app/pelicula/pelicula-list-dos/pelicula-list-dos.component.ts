import { Component, OnInit, Input } from '@angular/core';
import { PeliculaService } from '../pelicula.service';
import { Pelicula } from '../../models/pelicula';
import { isNullOrUndefined } from 'util';
import { PeliculaTotales } from '../../models/peliculaTotales';

@Component({
  selector: 'app-pelicula-list-dos',
  templateUrl: './pelicula-list-dos.component.html',
  styleUrls: ['./pelicula-list-dos.component.css'],
  providers: [PeliculaService]

}) 
export class PeliculaListDosComponent implements OnInit {

  constructor(private peliculaService: PeliculaService) {
    this.peliculaService
      .getPeliculas()
      .then((peliculas: Pelicula[]) => {
        this.peliculas = peliculas;
        this.graficarGeneros(this.peliculas);
        this.graficarTopCalificaciones(this.peliculas);
        this.loading = false;
      });
   }
  peliculas: Pelicula[];
  peliculasTotales: PeliculaTotales[];
  loading = true;

  /** Graficas*/
  id = 'chart1'
  width = 1050;
  height = 430;
  dataFormat = 'json';
  type = 'column2d';
  dataSourceTopGeneros;
  dataSourceTopCalificaciones;

    /** FIN Graficas*/

  /**CANTIDADES*/
  totalesGenero = [{ genero: 'Drama', total: 0}, 
    { genero: 'Comedia', total: 0 },
    { genero: 'Accion', total: 0 },
    { genero: 'Ciencia', total: 0 },
    { genero: 'ficción', total: 0 },
    { genero: 'Fantasía', total: 0 },
    { genero: 'Terror', total: 0 },
    { genero: 'Musical', total: 0 },
    { genero: 'Melodrama', total: 0 },
    { genero: 'Romance', total: 0 },
    { genero: 'Suspenso', total: 0 },
    { genero: 'Histórico', total: 0 },
    { genero: 'Policíaco', total: 0 },
    { genero: 'Western', total: 0 },
    { genero: 'Animacion', total: 0 },
    { genero: 'Para niños', total: 0 },
    { genero: 'Cine arte', total: 0 },
    { genero: 'Cine independiente', total: 0 }

] ;

    /** FIN CANTIDADES*/

  ngOnInit() {
  } 

  /** ACTIVACIONES TOPS*/
  topGeneros = false;
  topCalificados = false;



  activarTopGeneros() {
    this.ponerFalseActivaciones();
    this.topGeneros = true;
  }
  activarTopCalificados() {
    this.ponerFalseActivaciones();
    this.topCalificados = true;
  }


  ponerFalseActivaciones() {
    this.topGeneros = false;
    this.topCalificados = false;


  }

      /** ACTIVACIONES TOP FIN|*/



  /*METODOS PARA GENERAR GRAFICAS*/
  graficarGeneros(pel: Pelicula[]) {


    for (let p of pel) {
      if( !isNullOrUndefined(p)){
        if (!isNullOrUndefined(p.generos) ){
          for (let g of p.generos) {
            for( let g2 of this.totalesGenero){
              if( g2.genero === g ){
                //console.log('generoTotales: ' + g2.genero + ' genero desde pelicula: ' + g);
                g2.total++;
              }
            }

          }
        }
      }
    }

    /** Graficas*/
    this.dataSourceTopGeneros = {
      "chart": {
        "caption": "Usuarios",
        "subCaption": "Grafica de generos de usuarios",
        "numberprefix": "#",
        "theme": "fint",
        "xAxisName": "Generos",
        "yAxisName": "Cantidad por genero",

      },
      "data": [
        {
          "label": this.totalesGenero[0].genero,
          "value": this.totalesGenero[0].total
        },
        {
          "label": this.totalesGenero[1].genero,
          "value": this.totalesGenero[1].total
        },
        {
          "label": this.totalesGenero[2].genero,
          "value": this.totalesGenero[2].total
        },
        {
          "label": this.totalesGenero[3].genero,
          "value": this.totalesGenero[3].total
        },
        {
          "label": this.totalesGenero[4].genero,
          "value": this.totalesGenero[4].total
        },
        {
          "label": this.totalesGenero[5].genero,
          "value": this.totalesGenero[5].total
        },
        {
          "label": this.totalesGenero[6].genero,
          "value": this.totalesGenero[6].total
        },
        {
          "label": this.totalesGenero[7].genero,
          "value": this.totalesGenero[7].total
        },
        {
          "label": this.totalesGenero[8].genero,
          "value": this.totalesGenero[8].total
        },
        {
          "label": this.totalesGenero[9].genero,
          "value": this.totalesGenero[9].total
        },
        {
          "label": this.totalesGenero[10].genero,
          "value": this.totalesGenero[10].total
        },
        {
          "label": this.totalesGenero[11].genero,
          "value": this.totalesGenero[11].total
        },
        {
          "label": this.totalesGenero[12].genero,
          "value": this.totalesGenero[12].total
        },
        {
          "label": this.totalesGenero[13].genero,
          "value": this.totalesGenero[13].total
        },
        {
          "label": this.totalesGenero[14].genero,
          "value": this.totalesGenero[14].total
        },
        {
          "label": this.totalesGenero[15].genero,
          "value": this.totalesGenero[15].total
        },
        {
          "label": this.totalesGenero[16].genero,
          "value": this.totalesGenero[16].total
        },
        {
          "label": this.totalesGenero[17].genero,
          "value": this.totalesGenero[17].total
        },
      ]
    }

    }
  
  graficarTopCalificaciones(pel: Pelicula[]) {
    let calificaciones = [];
    this.peliculasTotales = pel;
    let contador = 0;
    let promCalificacion = 0;

    pel.forEach((p) => {
      if (p.calificacion !== null) {
        //console.log( 'titulo: ' + p.titulo);
        for( let c of p.calificacion){
          contador++;
          promCalificacion += c.calificacion;
        }
        promCalificacion /= contador;
        //console.log('promedio calificacion :' + promCalificacion);

        calificaciones.push( { idPelicula: p._id , promCalificacion});
        promCalificacion = 0;
        contador = 0;
      }
    });

    for (let p of this.peliculasTotales) {
      p.totalCalificacion = 0;
    }

    console.log( 'calificaciones: ' + JSON.stringify(calificaciones));

    for( let pelTot of this.peliculasTotales){
      for( let cali of calificaciones ){
        if( pelTot._id === cali.idPelicula){
          pelTot.totalCalificacion = cali.promCalificacion;
        }
      }
    }

    /*ORDENANDO PELICULAS POR promCalificacion desc*/
    for (let i = 1; i < this.peliculasTotales.length ; i++) {
      for (let j = 0; j < (this.peliculasTotales.length - i); j++) {
        if (this.peliculasTotales[j].totalCalificacion < this.peliculasTotales[j + 1].totalCalificacion) {
          let k = this.peliculasTotales[j + 1];
          this.peliculasTotales[j + 1] = this.peliculasTotales[j];
          this.peliculasTotales[j] = k;
        }
      }
    }
/*FIN ORDENANDO PELICULAS POR promCalificacion desc**/



    /** Graficas*/
    this.dataSourceTopCalificaciones = {
      "chart": {
        "caption": "Usuarios",
        "subCaption": "Grafica de top calificaciones",
        "numberprefix": "#",
        "theme": "fint",
        "xAxisName": "Titulo",
        "yAxisName": "Promedio calificacion",
      },
      "data": [
        {
          "label": this.peliculasTotales[0].titulo,
          "value": this.peliculasTotales[0].totalCalificacion
        },
        {
          "label":this.peliculasTotales[1].titulo ,
          "value":this.peliculasTotales[1].totalCalificacion 
        }
        ,
        {
          "label":this.peliculasTotales[2].titulo ,
          "value":this.peliculasTotales[2].totalCalificacion 
        }
        ,
        {
          "label": this.peliculasTotales[3].titulo,
          "value": this.peliculasTotales[3].totalCalificacion
        }
        , {
          "label":this.peliculasTotales[4].titulo ,
          "value":this.peliculasTotales[4].totalCalificacion
        }, {
          "label": this.peliculasTotales[5].titulo,
          "value":this.peliculasTotales[5].totalCalificacion
        }, {
          "label": this.peliculasTotales[6].titulo,
          "value":this.peliculasTotales[6].totalCalificacion
        }, {
          "label": this.peliculasTotales[7].titulo,
          "value":this.peliculasTotales[7].totalCalificacion
        }, {
          "label": this.peliculasTotales[8].titulo,
          "value":this.peliculasTotales[8].totalCalificacion
        }, {
          "label": this.peliculasTotales[9].titulo,
          "value":this.peliculasTotales[9].totalCalificacion
        }

      ]
    }


  }
  
    /*FIN METODOS PARA GENERAR GRAFICAS*/




}



