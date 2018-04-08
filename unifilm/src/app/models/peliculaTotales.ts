import { Calificacion } from './calificacion';
import { Director } from './director';
import { Actor } from './actor';
import { Usuario } from './usuario';





export class PeliculaTotales {
    constructor(
        public _id: string,
        public titulo?: string,
        public directores?: Director,
        public actores?: Actor,
        public generos?: Array<Object>,
        public anioProduccion?: string,
        public fechaAdicion?: Date,
        public sinopsis?: string,
        public clasificacion?: Array<Object>,
        public duracion?: Number,
        public casaProductora?: string,
        public calificacion?: Array<Calificacion>,
        public urlPortada?: string,
        public urlPelicula?: string,
        public usuarioAgrego?: Usuario,
        public totalCalificacion?: number
    ) {}
}
