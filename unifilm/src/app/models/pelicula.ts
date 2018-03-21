import { Calificacion } from './calificacion';
import { Director } from './director';
import { Actor } from './actor';





export class Pelicula {
    constructor(
        public idPelicula: string,
        public titulo?: string,
        public directores?: Array<Director>,
        public actores?: Array<Actor>,
        public generos?: Array<Object>,
        public anioProduccion?: Date,
        public fechaAdicion?: Date,
        public clasificacion?: Array<Object>,
        public duracion?: Number,
        public casaProducora?: string,
        public calificacion?: Array<Calificacion>,
        public imagen?: string,
        public urlPelicula?: string
    ) {}
}
