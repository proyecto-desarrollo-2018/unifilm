import mongoose, { Schema } from 'mongoose'

const DirectorSchema = Schema({
    nombre : { type: String, required: false},
    apPaterno : { type: String, required: false },
    apMaterno : { type: String, required: false },
    tipoDirector : { type: String, required: false }
})

export default mongoose.model('Director', DirectorSchema)