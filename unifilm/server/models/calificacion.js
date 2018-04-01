import mongoose, { Schema } from 'mongoose'
import { Usuario, Pelicula } from './'

const { ObjectId } = Schema.Types

const CalificacionSchema = Schema({
    calificacion: { type: Number, required: false},
    comentario : { type: String, required: false},
    fechaCal : { type: Date , default: Date.now, required: false},
    usuario: { type: ObjectId , ref: 'Usuario', required: false},
})

export default mongoose.model('Calificacion', CalificacionSchema)