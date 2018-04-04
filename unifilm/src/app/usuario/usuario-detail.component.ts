import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Usuario } from '../models/usuario';
import { UsuarioService } from './usuario.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-detail',
  templateUrl: './usuario-detail.component.html',
  styleUrls: ['./usuario-detail.component.css'], 
  providers: [UsuarioService]
})
export class UsuarioDetailComponent implements OnInit, OnDestroy {
  usuario?: Usuario;
  loading = true;
  sub: any;

  @Input() idUsuario: string;


  constructor( private usuarioService: UsuarioService, private route: ActivatedRoute ) { 
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.usuarioService
        .getUsuario(this.idUsuario)
        .then( (usuario: Usuario) => {
          this.usuario = usuario;
          this.loading = false;
        });
    });
    console.log('id usuario: ' + this.idUsuario);

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }


}
