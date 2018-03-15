import { Pago } from "./pago";
import { Tarjeta } from "./tarjeta";

export class Usuario {
    constructor(
        public idUsuario?: string,
        public nomUsuario?: string,
        public nombre?: string,
        public apellidoP?: string,
        public apellidoM?: string,
        public direccion?: string,
        public fNacimiento?: Date,
        public telefono?: string,
        public correo?: string,
        public contra?: string,
        public genero?: string,
        public tipoUsuario?: string,
        public tarjeta?: Tarjeta,
        public pagos?: Array<Pago>
    ){}
    
}



