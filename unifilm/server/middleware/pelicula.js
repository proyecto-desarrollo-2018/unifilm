import { pelicula } from '../db-api' 
import { handleError } from '../utils'

export const peliculaMiddleware = async (req, res, next) => {
    try{
        req.pelicula = await pelicula.findById(req.params.id)
        next()
    } catch( error) {
        handleError(error,res)
    }
}