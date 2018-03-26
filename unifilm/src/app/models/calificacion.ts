import { Usuario } from './usuario';
import { Pelicula } from './pelicula';

export class Calificacion {
    constructor(public idCalificacion?: string,
        public calificacion?: number,
        public pelicula?: Pelicula,
        public usuarioCalifico?: Usuario,
        public comentario?: string,
        public fechaCal?: Date) { }
}
