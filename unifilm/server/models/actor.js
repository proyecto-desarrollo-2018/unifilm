import mongoose, { Schema } from 'mongoose'

const ActorSchema = Schema({
    nombre : { type: String, required: true },
    apPaterno : { type: String, required: true },
    apMaterno : { type: String, required: true },
    tipoActor : { type: String, required: true }
})

export default mongoose.model('Actor', ActorSchema)