import { Pelicula } from '../models'

export default {
    findAll: async () => {
        console.log('Buscando todas las peliculas')
        return await Pelicula.find().populate('calificacion')
    },

    findById: async ( _id ) => {
        console.log('Buscando una pelcula')
        return await Pelicula
            .findOne({ _id })
            .populate('usuarioAgrego')
            .populate({
                path: 'calificacion',
                options: { sort: '-fechaCal'},
                populate: {
                    path: 'usuario',
                    model: 'Usuario'
                }
            })

    }
}