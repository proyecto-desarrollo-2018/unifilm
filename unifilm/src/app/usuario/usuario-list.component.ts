import { Component, OnInit } from '@angular/core';
import { UsuarioService } from './usuario.service';
import { Usuario } from '../models/usuario';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css'],
  providers: [ UsuarioService ]
})
export class UsuarioListComponent implements OnInit {
  usuarios: Array<Usuario>;
  loading = true;
  
  /** Graficas*/

  type = 'pie3d';
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
    
    /** FIN CANTIDADES*/






  graficarGeneros(us:Usuario[]){
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
        "theme": "fint"
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

  graficarTopTiposUsuarios(us: Usuario[]) {
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
        "theme": "fint"
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

  graficarTopEdades(us: Usuario[]) {
    let femenino = 0;
    let masculino = 0;
    for (let u of us) {
      if (u.genero === 'M') {
        masculino += 1;
      }
      if (u.genero === 'F') {
        femenino += 1;
      }
    }

    /** Graficas*/
    this.dataSourceTopEdades = {
      "chart": {
        "caption": "Usuarios",
        "subCaption": "Grafica de generos de usuarios",
        "numberprefix": "#",
        "theme": "fint"
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
    this.totalMasculino = masculino;


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
        this.graficarGeneros(usuarios);
        this.graficarTopTiposUsuarios(usuarios);
        this.loading = false;
      });

  }
}
