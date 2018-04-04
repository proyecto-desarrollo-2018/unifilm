import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-administracion-usuarios',
  templateUrl: './administracion-usuarios.component.html',
  styleUrls: ['./administracion-usuarios.component.css']
})
export class AdministracionUsuariosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  //ACTIVACIONES SECCIONES
  agregarUsuarios = false;

  activarAgregarUsuarios() {
    this.ponerEnFalse();
    this.agregarUsuarios = true;
  }
  editarUsuarios = false;
  activarEditarUsuarios() {
    this.ponerEnFalse();
    this.editarUsuarios = true;

  }

  ponerEnFalse() {
    this.agregarUsuarios = false;
    this.editarUsuarios = false;
  }

  //FIN ACTIVACIONES SECCIONES

}
