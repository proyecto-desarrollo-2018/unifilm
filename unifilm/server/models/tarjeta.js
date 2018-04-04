import mongoose, { Schema } from 'mongoose'

import { Usuario } from './'

const { ObjectId } = Schema.Types





const TarjetaSchema = Schema({
    numTarjeta: { type: String , required: false},
    mesExpiracion: { type: String , required: false},
    anioExpiracion: { type: String , required: false},
    codigoSeguridad: { type: String , required: false},
    usuario: { type: ObjectId, ref: 'Usuario', required: false },
})


export default mongoose.model('Tarjeta', TarjetaSchema)  