import mongoose, { Schema } from 'mongoose'

const DirectorSchema = Schema({
    nombre : { type: String, required: true },
    apPaterno : { type: String, required: true },
    apMaterno : { type: String, required: true },
    tipoDirector : { type: String, required: true }
})

export default mongoose.model('Director', DirectorSchema)