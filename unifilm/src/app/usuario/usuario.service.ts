import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';
import { Http, Headers, Response } from '@angular/http';
import { environment } from '../../environments/environment';
import urljoin from 'url-join';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';


@Injectable()
export class UsuarioService {

    private usuarioUrl: string;
    constructor( private http: Http ) {
        //this.usuarioUrl = urljoin(environment.apiUrl, 'usuarios');
        this.usuarioUrl = environment.apiUrl + 'usuarios';

    }
    getUsuarios(): Promise<void | Usuario[]> {
        console.log('url: desde getUsuario() = ' + this.usuarioUrl);

        return this.http.get(this.usuarioUrl)
                .toPromise()
                .then( response => response.json() as Usuario[] )
                .catch(this.handleError);
    }

    getUsuario(id): Promise<void | Usuario> {
        //const url = urljoin(this.usuarioUrl, id);
        const url =   this.usuarioUrl + '/' + id;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json() as Usuario)
            .catch(this.handleError);
    }

    addUsuario(usuario: Usuario) {
        const body = JSON.stringify(usuario);
        const headers = new Headers({ 'Content-Type': 'application/json'});

        return this.http.post(this.usuarioUrl, body , {headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));
    }

    handleError(error: any) {
        const errMsg = error.message ? error.message :
            error.status ? error.status + '-' +  error.statusText : 'Error de Servidor' ;
        console.log(errMsg);
    }
}