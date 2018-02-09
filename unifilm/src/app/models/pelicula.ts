export class Pelicula {
    constructor(
        public idPelicula: string,
        public titulo?: string,
        public director?: string,
        public elenco?: string,
        public genero?: string,
        public anio?: Date,
        public calificacion?: number,
        public raitin?: string,
    ) {}
}
