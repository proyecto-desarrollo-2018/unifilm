import { Component, OnInit } from '@angular/core';
import { UsuarioService } from './usuario.service';
import { UsuarioEdad } from '../models/usuarioEdad';
import { Usuario} from '../models/usuario';


@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css'],
  providers: [ UsuarioService ]
})
export class UsuarioListComponent implements OnInit {
  usuarios: Array<UsuarioEdad>;
  loading = true;
  
  /** Graficas*/
  id = 'chart1'
  width= 900;
  height= 430;
  dataFormat = 'json';
  type = 'bar2d';
  dataSourceTopGeneros;
  dataSourceTopTiposUsuarios;
  dataSourceTopEdades;
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

 
  ngOnInit() { 

  }



    /** ACTIVACIONES TOPS*/
  topGeneros= false;
  topTiposUsuarios = false;
  topEdades = false;
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

  ponerFalseActivaciones() {
    this.topGeneros = false;
    this.topTiposUsuarios = false;
    this.topEdades = false;
  }

      /** ACTIVACIONES TOP FIN|*/


  constructor(private usuarioService: UsuarioService) {

    this.usuarioService
      .getUsuarios()
      .then((usuarios: Usuario[]) => {
        this.usuarios = usuarios;
        this.graficarGeneros(this.usuarios);
        this.graficarTopTiposUsuarios(this.usuarios);
        this.graficarTopEdades(this.usuarios);
        this.loading = false;
      });

  }
}
