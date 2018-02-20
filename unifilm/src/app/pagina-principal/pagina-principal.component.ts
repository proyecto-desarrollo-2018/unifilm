import { Component, OnInit, Input } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { Usuario } from '../models/usuario';
import { VALID } from '@angular/forms/src/model';

@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.css']
})
export class PaginaPrincipalComponent implements OnInit {
  @Input() usuarios: Array<Usuario> = [];
  singin: FormGroup;
  registro: FormGroup;

  constructor() { }

  ngOnInit() {
    this.singin = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)

    });
    this.registro = new FormGroup({
      username: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)),
      password: new FormControl(null, Validators.required),
      cpassword: new FormControl(null, Validators.required),
      nombre: new FormControl(null, Validators.required),
      apellido: new FormControl(null, Validators.required),
      genero: new FormControl(null, Validators.required),
      tarjeta: new FormControl(null, Validators.required)
    });
  }

  onSubmitL() {
    if (this.singin.valid) {
      const { username, password } = this.singin.value;
      const user = new Usuario(null, username, null, null, null, null, null, null, password, null, null, null, null);
      console.log(user);
    }else{
      console.log('Error en el formulario de sesion')
    }
  }

  onSubmit() {
    if ( this.registro.valid ) {
      const { username, nombre, apellido, email, password, genero, tarjeta } = this.registro.value; 
      const usuario = new Usuario(null,
        username,
        nombre,
        apellido,
        null,
        null,
        null,
        email,
        password,
        genero,
        null,
        tarjeta,
        null);

      console.log(usuario);
      this.usuarios.unshift(usuario);
      this.mostrarUsuarios();
    }else{
      console.log('Error en el formulario de registro');
    }
  }

  

  mostrarUsuarios() {
    console.log(this.usuarios);
  }

}
