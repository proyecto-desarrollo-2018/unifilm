import { Usuario, Tarjeta } from '../models'

export default {
    findAll: () => {
        console.log('Buscando todos los usuarios')
        return Usuario.find()
    },

    findById: (_id) => {
        console.log('Buscando una pelcula')
        return Usuario
            .findOne({ _id })
            

    }
    
}