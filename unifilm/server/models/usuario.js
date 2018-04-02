import mongoose, { Schema } from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'
import { Tarjeta } from './'


const { ObjectId } = Schema.Types
const UsuarioSchema = Schema({
    nomUsuario: { type: String, required: false, unique: true, index: true},
    nombre : { type: String, required: true },
    apellidoP : { type: String, required: true },
    apellidoM : { type: String, required: true },
    direccion : { type: String, required: false },
    fNacimiento : { type: Date, default: Date.now, required: false },
    telefono : { type: String, required: false },
    correo : { type: String, required: true, unique: true, index: true },
    contra : { type: String, required: true },
    genero : { type: String, required: false },
    tipoUsuario : { type: String, required: true },
    tarjeta : { type: ObjectId , ref: 'Tarjeta' , required: false }
})


UsuarioSchema.plugin(uniqueValidator)
export default mongoose.model('Usuario', UsuarioSchema)