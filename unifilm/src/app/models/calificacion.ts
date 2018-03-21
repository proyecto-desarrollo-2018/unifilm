import { Usuario } from './usuario';

export class Calificacion {
    constructor(public idCalificacion?: string,
        public calificacion?: number,
        public usuarioCalifico?: Usuario,
        public comentario?: string,
        public fechaCal?: Date) { }
}
