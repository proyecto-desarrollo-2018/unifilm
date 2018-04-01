import { Usuario } from './usuario';
import { Pelicula } from './pelicula';

export class Calificacion {
    constructor(public _id?: string,
        public calificacion?: number,
        public pelicula?: Pelicula,
        public usuario?: Usuario,
        public comentario?: string,
        public fechaCal?: Date) { }
}
 