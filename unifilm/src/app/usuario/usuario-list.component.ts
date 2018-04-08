import { Component, OnInit } from '@angular/core';
import { UsuarioService } from './usuario.service';
import { UsuarioEdad } from '../models/usuarioEdad';
import { Usuario} from '../models/usuario';
import { Pelicula } from '../models/pelicula';
import { PeliculaService } from '../pelicula/pelicula.service';
import { isEmpty } from 'rxjs/operator/isEmpty';


@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css'],
  providers: [ UsuarioService, PeliculaService ]
})
export class UsuarioListComponent implements OnInit {
  usuarios: Array<UsuarioEdad>;
  peliculas: Pelicula[];

  loading = true;
  
  /** Graficas*/ 
  id = 'chart1'
  width= 900;
  height= 430;
  dataFormat = 'json';
  type = 'column2d';
  dataSourceTopGeneros;
  dataSourceTopTiposUsuarios;
  dataSourceTopEdades;
  dataSourceTopCalificaciones;

    /** FIN Graficas*/


    /**CANTIDADES*/
    totalFemenino = 0; 
    totalMasculino = 0;

    totalClientes = 0;
    totalSoporte = 0;
    totalAdministradores = 0;

    totalmenos10= 0;
    total10a20 = 0;
    total10a19 = 0;
    total20a29 = 0;
    total30a39 = 0;
    total40a49 = 0;
    totalmas50 = 0;

    

    /** FIN CANTIDADES*/






  graficarGeneros(us:UsuarioEdad[]){
    let femenino = 0;
    let masculino = 0;
    for(let u of us){
      if( u.genero === 'M'){
        masculino +=1;
      }
      if( u.genero === 'F'){
        femenino += 1;
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
          "label": "Maculino",
          "value": masculino
        },
        {
          "label": "Femenino",
          "value": femenino
        }
      ]
    }
    
    this.totalFemenino = femenino;
    this.totalMasculino =masculino;


  }

  graficarTopTiposUsuarios(us: UsuarioEdad[]) {
    let administrador = 0;
    let soporte = 0;
    let cliente = 0;

    for (let u of us) {
      if (u.tipoUsuario === 'administrador') {
        administrador += 1;
      }
      if (u.tipoUsuario === 'soporte') {
        soporte += 1;
      }
      if (u.tipoUsuario === 'cliente') {
        cliente += 1;
      }
      
    }

    /** Graficas*/
    this.dataSourceTopTiposUsuarios = {
      "chart": {
        "caption": "Usuarios",
        "subCaption": "Grafica de generos de usuarios",
        "numberprefix": "#",
        "theme": "fint",
        "xAxisName": "Tipos de Usuarios",
        "yAxisName": "Cantidad por Usuario",
      },
      "data": [
        {
          "label": "Administrador",
          "value": administrador
        },
        {
          "label": "Soporte",
          "value": soporte
        },
        {
          "label": "Cliente",
          "value": cliente
        }
      ]
    }

    this.totalAdministradores = administrador;
    this.totalClientes = cliente;
    this.totalSoporte = soporte;


  }

  graficarTopEdades(us: UsuarioEdad[]) {
    let fechaNac = new Date();
    const fechaHoy = new Date(Date.now());
    let edades = [];

    for (let u of us) {
     fechaNac = new Date(u.fNacimiento);
      edades.push( {edad: fechaHoy.getFullYear() - fechaNac.getFullYear()});
    }
    let indice = 0;
    for( let e of edades ){
      this.usuarios[indice].edad = e.edad;
      indice += 1;
    }

    for( let u of this.usuarios ){
      if( u.edad < 10 ){
        this.totalmenos10++;
      } else if (u.edad < 20) {
        this.total10a19++;
      } else if (u.edad < 30) {
        this.total20a29++;
      } else if (u.edad < 40) {
        this.total30a39++;
      } else if (u.edad < 50) {
        this.total40a49++;
      } else {
        this.totalmas50++;
      }
    }



    /** Graficas*/
    this.dataSourceTopEdades = {
      "chart": {
        "caption": "Usuarios",
        "subCaption": "Grafica de edades de usuarios",
        "numberprefix": "#",
        "theme": "fint",
        "xAxisName": "Rangos de Edades",
        "yAxisName": "Cantidad por Rango de Edad",
      },
      "data": [
        {
          "label": "menos de 10 años",
          "value": this.totalmenos10
        },
        {
          "label": "entre 10 y 19 años",
          "value": this.total10a19
        }
        ,
        {
          "label": "entre 20 y 29 años",
          "value": this.total20a29
        }
        ,
        {
          "label": "entre 30 y 39 años",
          "value": this.total30a39
        }  
        , {
          "label": "entre 40 y 49 años",
          "value": this.total40a49
        }
        , {
          "label": "mas de 50 años",
          "value": this.totalmas50
        }
        
      ]
    }


  }

  graficarTopCalificaciones(pel: Pelicula[], usu: UsuarioEdad[]) {
    let calificaciones = [];
    pel.forEach((p) => { 
      if( p.calificacion !== null ){
        calificaciones.push(p.calificacion); 
      }  
    });

    for (const u of usu) {
      u.numCalificaciones = 0;
    }
    let contador = 0;
    for ( const c of calificaciones ){
      for( const c2 of c ){
        if( c2.usuario !== undefined ){
          for (const u of usu) {
            if( u._id === c2.usuario ){
                u.numCalificaciones += 1;
            }
          }
        }
      }
    }

/*ORDENANDO USUARIOS POR numCalificaciones desc*/
    for (let i = 1; i < usu.length; i++) {
      for (let j = 0; j < (usu.length - i); j++) {
        if (usu[j].numCalificaciones < usu[j + 1].numCalificaciones) {
          let k = usu[j + 1];
          usu[j + 1] = usu[j];
          usu[j] = k;
        }
      }
    }
/*FIN ORDENANDO USUARIOS POR numCalificaciones ASC*/


    /** Graficas*/
    this.dataSourceTopCalificaciones = {
      "chart": {
        "caption": "Usuarios",
        "subCaption": "Grafica de top calificaciones",
        "numberprefix": "#",
        "theme": "fint",
        "xAxisName": "Usuario",
        "yAxisName": "Cantidad de calificaciones por usuario",
      },
      "data": [
        {
          "label": usu[ 0 ].nombre,
          "value": usu[ 0 ].numCalificaciones
        },
        {
          "label": usu[ 1 ].nombre,
          "value":usu[ 1 ].numCalificaciones
        }
        ,
        {
          "label": usu[ 2 ].nombre,
          "value":usu[ 2 ].numCalificaciones 
        }
        ,
        {
          "label":usu[ 3 ].nombre ,
          "value": usu[ 3 ].numCalificaciones
        }
        , {
          "label": usu[ 4 ].nombre,
          "value":usu[ 4].numCalificaciones 
        }

      ]
    }


  }

 
  ngOnInit() { 
    
  }



    /** ACTIVACIONES TOPS*/
  topGeneros= false;
  topTiposUsuarios = false;
  topEdades = false;
  topCalificaciones = false;


  activarTopGeneros() {
    this.ponerFalseActivaciones();
    this.topGeneros = true;
  }
  activarTopTiposUsuarios() {
    this.ponerFalseActivaciones();
    this.topTiposUsuarios = true;
  }
  activarTopEdades() {
    this.ponerFalseActivaciones();
    this.topEdades = true;
  }
  activarTopCalificaciones() {
    this.ponerFalseActivaciones();
    this.topCalificaciones = true;
  }

  ponerFalseActivaciones() {
    this.topGeneros = false;
    this.topTiposUsuarios = false;
    this.topEdades = false;
    this.topCalificaciones = false;

  }

      /** ACTIVACIONES TOP FIN|*/


  constructor(private usuarioService: UsuarioService, private peliculaService: PeliculaService) {

    this.usuarioService
      .getUsuarios()
      .then((usuarios: Usuario[]) => {
        this.usuarios = usuarios;
        this.graficarGeneros(this.usuarios);
        this.graficarTopTiposUsuarios(this.usuarios);
        this.graficarTopEdades(this.usuarios);
        this.loading = false;
      });
    this.peliculaService
      .getPeliculas()
      .then((peliculas: Pelicula[]) => {
        this.peliculas = peliculas;
        this.graficarTopCalificaciones(this.peliculas, this.usuarios);

      });





  }
  
}
