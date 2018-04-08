import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { Usuario } from '../models/usuario';
import { Tarjeta } from '../models/tarjeta';
import { Validaciones } from '../validaciones/validaciones';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';


@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css'],
  providers: [  ]
})
export class SingupComponent implements OnInit {

  registro: FormGroup;
  
  ngOnInit() {
  }

  constructor(public fb: FormBuilder, 
              private router: Router,
              private authService: AuthService ) {
    this.registro = this.fb.group({
      nombreU: ['', [Validators.required, Validators.pattern("[a-zA-Z0-9-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,._'-]{4,20}"), Validaciones.verificarEspacios]],
      contra: ['', [Validators.required, Validators.pattern(/^[a-z0-9_-]{6,18}$/)]],
      contraC: ['', [Validators.required, Validators.pattern(/^[a-z0-9_-]{6,18}$/)]],
      nombre: ['', [Validators.required]],
      apellidoP: ['', [Validators.required, Validaciones.verificarEspacios]],
      apellidoM: ['', [Validators.required, Validaciones.verificarEspacios]],
      fNacimiento: ['', [Validators.required]],
      correo: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"), Validaciones.verificarEspacios]],
      sexo: ['', [Validators.required]],
      numeroTarjeta: ['', [Validators.required, Validators.pattern(/^[0-9]{16}$/)]],
      mesFE: ['', [Validators.required]],
      anioFE: ['', [Validators.required]],
      codigoS: ['', [Validators.required, Validaciones.verificarEspacios, Validators.pattern(/^[0-9]{3}$/)]]
    });
  }
  onSubmit() {
    if (this.registro.valid) {
      const { nombreU, contra, nombre, apellidoP,
        apellidoM, fNacimiento,correo, sexo,
        numeroTarjeta, mesFE, anioFE, codigoS } = this.registro.value;
      const tarjeta: Tarjeta = new Tarjeta(null, numeroTarjeta, mesFE, anioFE, codigoS);
      const usuario = new Usuario(null,
        nombreU,
        nombre,
        apellidoP,
        apellidoM,
        null,
        fNacimiento,
        null,
        correo,
        contra, 
        sexo,
        'cliente', 
        []
        );
      usuario.tarjeta.push(tarjeta);

        this.authService.singup(usuario)
          .subscribe(
            this.authService.login,
            err => console.log(err)
          );
      this.router.navigateByUrl('/home-cliente');
    } else {
      console.log('Error en el formulario de registro');
    }
  }

  isValidMatchPassword() {
    const contra = this.registro.get('contra').value;
    const contraC = this.registro.get('contraC').value;
    if (contra !== contraC) {
      return false;
    } else {
      return true;
    }
  }

}
