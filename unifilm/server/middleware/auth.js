import { secret } from '../config'
import jwt from 'jsonwebtoken'

export const required = (req, res, next ) => {
    jwt.verify(req.query.token, secret, (err, token) => {
        if( err ) {
            console.log( 'JWT no fue encriptada con nuestra clave secreta')
            return res.status(401).json({
                message: 'No autorizado',
                error: err
            })
        }

        console.log('Token verificado : ' + token )
        req.user = token.user
        next()


    })
}
