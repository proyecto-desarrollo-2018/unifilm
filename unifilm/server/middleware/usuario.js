import { usuario } from '../db-api'
import { handleError } from '../utils'

export const usuarioMiddleware = async (req, res, next) => {
    try {
        req.usuario = await usuario.findById(req.params.id)
        next()
    } catch (error) {
        handleError(error, res)
    }
}