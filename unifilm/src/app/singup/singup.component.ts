import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { Usuario } from '../models/usuario';
import { Tarjeta } from '../models/tarjeta';
import { Validaciones } from '../validaciones/validaciones';
import { UsuarioService } from '../usuario/usuario.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css'],
  providers: [ UsuarioService ]
})
export class SingupComponent implements OnInit {
  @Input() usuarios: Array<Usuario> = [];

  registro: FormGroup;

  ngOnInit() {
  }

  constructor(public fb: FormBuilder, 
              private usuarioService: UsuarioService,
              private router: Router ) {
    this.registro = this.fb.group({
      nombreU: ['', [Validators.required, Validators.pattern("[a-zA-Z0-9-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,._'-]{4,20}"), Validaciones.verificarEspacios]],
      contra: ['', [Validators.required, Validators.pattern(/^[a-z0-9_-]{6,18}$/)]],
      contraC: ['', [Validators.required, Validators.pattern(/^[a-z0-9_-]{6,18}$/)]],
      nombre: ['', [Validators.required]],
      apellidoP: ['', [Validators.required, Validaciones.verificarEspacios]],
      apellidoM: ['', [Validators.required, Validaciones.verificarEspacios]],
      correo: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"), Validaciones.verificarEspacios]],
      sexo: ['', [Validators.required]],
      numeroTarjeta: ['', [Validators.required, Validators.pattern(/^[0-9]{16}$/)]],
      mesFE: ['', [Validators.required]],
      anioFE: ['', [Validators.required]],
      codigoS: ['', [Validators.required, Validaciones.verificarEspacios, Validators.pattern(/^[0-9]{3}$/)]]
    });
  }
  onSubmit() {
    const idRa  =  (Math.random() * 100);
    const idS = idRa.toString();
    if (this.registro.valid) {
      const { nombreU, contra, nombre, apellidoP,
        apellidoM, correo, sexo,
        numeroTarjeta, mesFE, anioFE, codigoS } = this.registro.value;
      const tarjeta: Tarjeta = new Tarjeta(null, numeroTarjeta, mesFE, anioFE, codigoS);
      const usuario = new Usuario(idS,
        nombreU,
        nombre,
        apellidoP,
        apellidoM,
        null,
        null,
        null,
        correo,
        contra,
        sexo,
        'cliente',
        tarjeta
        );

      alert('Usuario agregado: ' + JSON.stringify(usuario));
      this.usuarioService.addUsuario(usuario)
        .subscribe(
          ({ idUsuario }) => this.router.navigate(['/usuarios'], idUsuario),
          error => console.log(error)
        );

      this.registro.reset();
    } else {
      console.log('Error en el formulario de registro');
    }
  }


  guardarUsuario() {
    //alert(JSON.stringify(this.registro.value));
    this.onSubmit();

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
