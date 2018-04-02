import mongoose, { Schema } from 'mongoose'


const TarjetaSchema = Schema({
    numTarjeta: { type: Number , required: false},
    mesExpiracion: { type: String , required: false},
    anioExpiracion: { type: String , required: false},
    codigoSeguridad: { type: Number , required: false}
})


export default mongoose.model('Tarjeta', TarjetaSchema)