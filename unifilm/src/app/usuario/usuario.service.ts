import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';
import urljoin from 'url-join';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class UsuarioService {

    private usuarioUrl: string;
    constructor( private http: Http ) {
        //this.usuarioUrl = urljoin(environment.apiUrl, 'usuarios');
        this.usuarioUrl = environment.apiUrl + 'usuarios';

    }
    getUsuarios(): Promise<void | Usuario[]> {
        return this.http.get(this.usuarioUrl)
                .toPromise()
                .then( response => response.json() as Usuario[] )
                .catch(this.handleError);
    }

    getUsuario(id): Promise<void | Usuario> {
        //const url = urljoin(this.usuarioUrl, id);
        const url = this.usuarioUrl + id;
        
        return this.http.get(url)
            .toPromise()
            .then(response => response.json() as Usuario)
            .catch(this.handleError);
    }

    handleError(error: any) {
        const errMsg = error.message ? error.message :
            error.status ? error.status + '-' +  error.statusText : 'Error de Servidor' ;
        console.log(errMsg);
    }
}