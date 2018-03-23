import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { Validaciones } from '../validaciones/validaciones';
import { Usuario } from '../models/usuario';
import { Router } from '@angular/router';
import { UsuarioService } from '../usuario/usuario.service';

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css'],
  providers: [UsuarioService]

})
export class SinginComponent implements OnInit {
  loging: FormGroup;
  usuarios: Usuario[];
  validado = false;

  constructor(public fb: FormBuilder, private _router: Router, private usuarioService: UsuarioService) {
    this.loging = this.fb.group({
      nombreU: ['', [Validators.required, Validators.pattern("[a-zA-Z0-9-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,._'-]{4,30}"), Validaciones.verificarEspacios]],
      contra: ['', [Validators.required, Validators.pattern(/^[a-z0-9_-]{6,18}$/), Validaciones.verificarEspacios]]
    });
  }

  ngOnInit() {
    this.usuarioService
      .getUsuarios()
      .then((usuarios: Usuario[]) => {
        this.usuarios = usuarios;
      });

  }

  iniciarSesion() {
    if (this.loging.valid) {
      const { nombreU, contra } = this.loging.value;

      const ususarioL: Usuario = new Usuario(null, nombreU, null, null, null, null, null, null, null, contra, null, null, null);
      alert('Nombre de usuario: ' + ususarioL.nomUsuario + ' contraseña: ' + ususarioL.contra);

      console.log( 'ValidarUserName: ' + this.validarUserName());

      if (this.validado === true ) {
        this.loging.reset();
        this._router.navigate(['/home-cliente']);
        console.log('Usuario existe');

      } else {
        alert('Usuario no existe');
      }


    }
  }

  validarUserName() {
    for ( const u of this.usuarios ) {
      if (this.loging.get('nombreU').value === u.nomUsuario) {
        this.validado = true;
        break;
      } else {
        this.validado = false;
      }
    }


  }

}
