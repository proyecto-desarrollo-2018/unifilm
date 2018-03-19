import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { Validaciones } from '../validaciones/validaciones';
import { Usuario } from '../models/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css']
})
export class SinginComponent implements OnInit {
  loging: FormGroup;

  constructor(public fb: FormBuilder, private _router: Router) {
    this.loging = this.fb.group({
      nombreU: ['', [Validators.required, Validators.pattern("[a-zA-Z0-9-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,._'-]{4,30}"), Validaciones.verificarEspacios]],
      contra: ['', [Validators.required, Validators.pattern(/^[a-z0-9_-]{6,18}$/), Validaciones.verificarEspacios]]
    });
  }

  ngOnInit() {
  }

  iniciarSesion() {
    if (this.loging.valid) {
      const { nombreU, contra } = this.loging.value;

      const ususarioL: Usuario = new Usuario(null, nombreU, null, null, null, null, null, null, null, contra, null, null, null);
      alert('Nombre de usuario: ' + ususarioL.nomUsuario + ' contraseña: ' + ususarioL.contra);
      this.loging.reset();
      this._router.navigate(['/home-cliente']);
    }
  }

}
