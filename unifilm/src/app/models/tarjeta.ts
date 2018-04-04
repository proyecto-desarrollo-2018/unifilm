import { Usuario } from "./usuario";

export class Tarjeta {
    constructor(
        public _id?: string,
        public numTarjeta?: string,
        public mesExpiracion?: string,
        public anioExpiracion?: string,
        public codigoSeguridad?: string,
        public usuario?: Usuario

    ) { }
}
