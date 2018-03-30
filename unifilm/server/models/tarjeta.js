import mongoose, { Schema } from 'mongoose'


const TarjetaSchema = Schema({
    numTarjeta: { type: Number , required: true},
    mesExpiracion: { type: String , required: true},
    anioExpiracion: { type: String , required: true},
    codigoSeguridad: { type: Number , required: true}
})


export default mongoose.model('Tarjeta', TarjetaSchema)