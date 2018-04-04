import mongoose, { Schema } from 'mongoose'
import { Usuario, Calificacion, Director, Actor } from './'

const { ObjectId } = Schema.Types


const PeliculaSchema = Schema({
    titulo : { type: String, required: false },
    directores: [{ type: ObjectId, ref: 'Director', default: [] }],
    actores: [{ type: ObjectId, ref: 'Actor', default: [] }],
    generos: [{ type: String, default: [] }],
    anioProduccion : { type: String, required: false },
    fechaAdicion : { type: Date, default: Date.now, required: false },
    sinopsis : { type: String, required: false },
    clasificacion: [{ type: String,  default: [] }],
    duracion : { type: Number, required: false },
    casaProductora : { type: String, required: false },
    calificacion: [{ type: ObjectId, ref: 'Calificacion', default: []}],
    urlPortada : { type: String, required: false },
    urlPelicula : { type: String, required: false },
    usuarioAgrego: { type: ObjectId, ref: 'Usuario', required: false}
})

export default mongoose.model('Pelicula', PeliculaSchema) 