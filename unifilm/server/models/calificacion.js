import mongoose, { Schema } from 'mongoose'
import { Usuario } from './'

const { ObjectId } = Schema.Types

const CalificacionSchema = Schema({
    calificacion: { type: Number, required: true},
    comentario : { type: String, required: true},
    fechaCal : { type: Date , default: Date.now, required: true},
    usuario: { type: ObjectId , ref: 'Usuario', required: false}
})

export default mongoose.model('Calificacion', CalificacionSchema)