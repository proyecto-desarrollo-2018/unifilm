import { Pago } from "./pago";

export class Usuario {
    constructor(
        public idUsuario?: string,
        public nomUsuario?: string,
        public nombre?: string,
        public apellidos?: string,
        public direccion?: string,
        public fNacimiento?: Date,
        public telefono?: string,
        public correo?: string,
        public contra?: string,
        public genero?: string,
        public tipoUsuario?: string,
        public numTarjeta?: string,
        public pagos?: Array<Pago>
    ){}
    
}



