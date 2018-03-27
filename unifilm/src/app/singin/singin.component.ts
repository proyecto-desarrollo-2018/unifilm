import { Component, OnInit,  } from '@angular/core';
import { FormBuilder, NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { Validaciones } from '../validaciones/validaciones';
import { Usuario } from '../models/usuario';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css'],
  providers: []

})
export class SinginComponent implements OnInit {
  loging: FormGroup;


  constructor(public fb: FormBuilder, private authService: AuthService ) {
  }

  ngOnInit() {
    this.loging = this.fb.group({
      correo: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"), Validaciones.verificarEspacios]],
      contra: ['', [Validators.required, Validators.pattern(/^[a-z0-9_-]{4,18}$/), Validaciones.verificarEspacios]]
    });

  }

  iniciarSesion() {
    if (this.loging.valid) {
      const { correo, contra } = this.loging.value;

      const usuario: Usuario = new Usuario(null, null, null, null, null, null, null, null, correo, contra, null, null, null);
      this.authService.singin(usuario)
        .subscribe(
          this.authService.login,
          err => console.log(err)
        );
    }
  }

}
