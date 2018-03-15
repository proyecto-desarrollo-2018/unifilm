import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { Usuario } from '../models/usuario';
import { Tarjeta } from '../models/tarjeta';
import { Validaciones } from '../validaciones/validaciones';


@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {
  @Input() usuarios: Array<Usuario> = [];

  registro: FormGroup;
  feSeleccionada: String = '';
  meSeleccionado: String = '';
  ngOnInit() {
  }

  constructor( public fb: FormBuilder){
    this.registro = this.fb.group({
      nombreU: ['',[Validators.required, Validaciones.verificarEspacios, Validators.minLength(5), Validators.maxLength(5)]],
      contra: ['', [Validators.required, Validators.pattern(/^[a-z0-9_-]{6,18}$/)]],
      contraC: ['', [Validators.required, Validators.pattern(/^[a-z0-9_-]{6,18}$/)]],
      nombre: ['', [Validators.required]],
      apellidoP: ['', [Validators.required, Validaciones.verificarEspacios]],
      apellidoM: ['', [Validators.required, Validaciones.verificarEspacios]],
      correo: ['', [Validators.required, Validators.email, Validaciones.verificarEspacios]],
      sexo: ['', [Validators.required]],
      numeroTarjeta: ['', [Validators.required]],
      mesFE: ['', [Validators.required]],
      anioFE: ['', [Validators.required]],
      codigoS: ['', [Validators.required, Validaciones.verificarEspacios]]



     /* company: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      age: ['', [Validators.required]],
      url: ['', [Validators.pattern(/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/)]],
      password: ['', [Validators.pattern(/^[a-z0-9_-]{6,18}$/)]],*/
    });
  }
  onSubmit() {
    if (this.registro.valid) {
      const { nombreU, contra, nombre, apellidoP,
              apellidoM, correo, sexo,
              numeroTarjeta, mesFE, anioFE, codigoS  } = this.registro.value;
      const tarjeta : Tarjeta = new Tarjeta( null , numeroTarjeta, mesFE, anioFE, codigoS );
      const usuario = new Usuario(null,
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
        tarjeta,
        null);

      console.log(usuario);
      this.usuarios.unshift(usuario);
      this.mostrarUsuarios();
      alert('Usuario agregado: ' + JSON.stringify(usuario));
      this.registro.reset();
    } else {
      console.log('Error en el formulario de registro');
    }
  }



  mostrarUsuarios() {
    console.log(this.usuarios);
  }

  cambioFE( event: any ) {
    //this.feSeleccionada = event.target.value;
    this.feSeleccionada = this.registro.get('mesFE').value;
  }
  cambioME(event: any) {
    //this.meSeleccionado = event.target.value;
    this.meSeleccionado = this.registro.get('anioFE').value;

  }
  guardarUsuario(){
    //alert(JSON.stringify(this.registro.value));
    this.onSubmit();

  }

}
