import { Pelicula } from "./pelicula";


export class Pago {

    constructor(
        public idPago: string,
        public banco?: string,
        public noTarjeta?: string,
        public noSecreto?: string,
        public tipoTarjeta?: string,
        public peliculas?: Array<Pelicula>
        ) {

         }
}
