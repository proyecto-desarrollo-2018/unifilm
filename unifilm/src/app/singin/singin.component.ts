import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
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
  usuarioValidado = false;
  passwordValidado = false    ;
  @ViewChild('contra') c: ElementRef;
  @ViewChild('nombreU') n: ElementRef;




  constructor(public fb: FormBuilder, private _router: Router, private usuarioService: UsuarioService, private renderer2: Renderer2) {
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
     
      this.validarUserName();
      if (this.usuarioValidado === true ) {
        if ( this.passwordValidado === true) {
          this.loging.reset();
          this._router.navigate(['/home-cliente']);
        } else {
          alert('Contraseña incorrecta');
          const onElement = this.renderer2.selectRootElement('#contra');
          onElement.focus();
        }
      } else {
        alert('Datos incorrectos');
        const onElement = this.renderer2.selectRootElement('#nombreU');
        onElement.focus();
        this.loging.reset();
      }
    }
  }

  validarUserName() {
    for ( const u of this.usuarios ) {
      if (this.loging.get('nombreU').value === u.nomUsuario) {
        if (this.loging.get('contra').value === u.contra) {
          this.usuarioValidado = true;
          this.passwordValidado = true;
          break;
        } else {
          this.passwordValidado = false;
        }
      } else {
        this.usuarioValidado = false;
      }
    }


  }

}
