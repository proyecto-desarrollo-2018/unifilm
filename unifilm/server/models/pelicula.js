import mongoose, { Schema } from 'mongoose'
import { Usuario, Calificacion, Director, Actor } from './'

const { ObjectId } = Schema.Types


const PeliculaSchema = Schema({
    titulo : { type: String, required: true },
    directores : [{ type: ObjectId, required: false }],
    actores : [{ type: ObjectId, required: false }],
    generos : [{ type: String, required: true }],
    anioProduccion : { type: String, required: true },
    fechaAdicion : { type: Date, default: Date.now, required: false },
    sinopsis : { type: String, required: true },
    clasificacion : [{ type: String, required: true }],
    duracion : { type: Number, required: true },
    casaProductora : { type: String, required: true },
    calificacion: [{ type: ObjectId, ref: 'Calificacion', required: false }],
    urlPortada : { type: String, required: true },
    urlPelicula : { type: String, required: true },
    usuarioAgrego: { type: ObjectId, ref: 'Usuario', required: true}
})

export default mongoose.model('Pelicula', PeliculaSchema)