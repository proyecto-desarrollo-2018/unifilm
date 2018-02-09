export class Usuario {
    constructor(
        public idUsuario: string,
        public nombre?: string,
        public apMaterno?: string,
        public apPaterno?: string,
        public direccion?: string,
        public fNacimiento?: Date,
        public telefono?: string,
        public correo?: string,
        public contra?: string,
        public tipoUsuario?: string){}
    
}



