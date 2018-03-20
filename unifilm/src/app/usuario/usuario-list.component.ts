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

  constructor(private usuarioService: UsuarioService) { }
  usuarios: Usuario[];
  loading = true;

  ngOnInit() { 
    this.usuarioService
      .getUsuarios()
      .then((usuarios: Usuario[]) => {
        this.usuarios = usuarios;
        this.loading = false;
      });
  }

}
