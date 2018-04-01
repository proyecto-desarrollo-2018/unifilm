import mongoose, { Schema } from 'mongoose'

const ActorSchema = Schema({
    nombre : { type: String, required: false },
    apPaterno : { type: String, required: false },
    apMaterno : { type: String, required: false },
    tipoActor : { type: String, required: false }
})

export default mongoose.model('Actor', ActorSchema)