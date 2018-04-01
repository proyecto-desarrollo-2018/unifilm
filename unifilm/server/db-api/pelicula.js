import { Pelicula, Calificacion } from '../models'

export default {
    findAll:  () => {
        console.log('Buscando todas las peliculas')
        return  Pelicula.find().populate('calificacion')
    },

    findById:  ( _id ) => {
        console.log('Buscando una pelcula')
        return  Pelicula
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

    },
    create:  (p) => {
        console.log('Creando una nueva pelicula: ' + JSON.stringify(p))
        const pelicula = new Pelicula(p)
        return pelicula.save() 
    },

    createCalificacion: async (p,c) => {
        const ca = new Calificacion(c)
        const pel = new Pelicula(p)

        const savedCalificacion = await ca.save()


        pel.calificacion.push(savedCalificacion)

        await pel.save()
        return ca

    }


}