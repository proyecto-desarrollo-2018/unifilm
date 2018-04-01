import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Usuario } from '../models/usuario';
import {Http, Headers, Response, Jsonp} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Router } from '@angular/router';


@Injectable()
export class AuthService {
    usersUrl: string;
    currentUser?: Usuario;

    constructor(private http: Http, private router: Router) {
        this.usersUrl = environment.apiUrl + 'auth';
        if ( this.isLoggedIn() ) { 
            const { userId, email, firsName, lastNameP, lastNameM } = JSON.parse(localStorage.getItem('user'));
            this.currentUser = new Usuario(userId, null, firsName, lastNameP, lastNameM, null, null, null, email, null, null, null, null);
        }
    }

    singup(user: Usuario) {
         const body = JSON.stringify(user);
         const headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post(this.usersUrl + '/singup', body, { headers })
            .map((response: Response) => {
                const json = response.json();
                this.login(json);
                return json;
            })
            .catch((error: Response) => {
                console.log(error);
                throw Observable.throw(error.json());
            });
    }

    singin(user: Usuario){
        const body = JSON.stringify(user);
        const headers = new Headers({ 'Content-Type': 'application/json'});
        return this.http.post(this.usersUrl + '/singin', body, {headers} )
            .map((response: Response) => {
                const json = response.json();
                this.login(json);
                return json;
            })
            .catch((error: Response) => {
                console.log(error);
                throw Observable.throw(error.json());
            });

    }

    login = ({ token, userId, firsName, lastNameP, lastNameM,email}) => {
        this.currentUser = new Usuario(userId, null, firsName, lastNameP, lastNameM,null, null, null, email,null,null,null,null );
        localStorage.setItem('token', token);
        localStorage.setItem('usuario', JSON.stringify({ userId, firsName, lastNameP, lastNameM, email}));
        this.router.navigateByUrl('/home-cliente');
    }

    isLoggedIn() {
        return localStorage.getItem('token') !== null;
    }


    logout() {
        localStorage.clear();
        this.currentUser = null;
        this.router.navigateByUrl('/singin');
    }

    showError(message) {
        alert(message);
    }

    public handleError = ( error: any ) => {
        const {  error: { name }, message } = error
        if ( name === 'TokenExpiredError' ) {
            this.showError('Tu sesion ha expirado');
        } else if ( name === 'JsonWebTokenError') {
            this.showError('Ha habido un error con tu sesion');
        } else {
            this.showError(message || 'Usuario o contraseña incorretos');   
        }

        this.logout();
    }

}
