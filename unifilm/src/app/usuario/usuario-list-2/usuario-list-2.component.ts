import { Component, OnInit, Input } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Usuario } from '../../models/usuario';
@Component({
  selector: 'app-usuario-list-2',
  templateUrl: './usuario-list-2.component.html',
  styleUrls: ['./usuario-list-2.component.css'],
  providers: [UsuarioService]

})
export class UsuarioList2Component implements OnInit {

  constructor(private usuarioService: UsuarioService) { } 
  usuarios: Usuario[];
  loading = true;

  idUsuario = 'no definido';

  ngOnInit() {
    this.usuarioService
      .getUsuarios()
      .then((usuarios: Usuario[]) => {
        this.usuarios = usuarios;
        this.loading = false;
      });

}
  editarUsuario = false;
  activarEditarUsuario(idUs){
    this.editarUsuario = true;
    this.idUsuario = idUs;
    console.log('id usuario desde metodo:' + this.idUsuario);
    
  }

}