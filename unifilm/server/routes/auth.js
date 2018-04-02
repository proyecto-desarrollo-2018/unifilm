import express from 'express'
import jwt from 'jsonwebtoken'
import { secret } from '../config'
import { Usuario, Tarjeta } from '../models'
import {
    hashSync as hash,
    compareSync as comparePassword

} from 'bcryptjs'

const app = express.Router()

export default app
 
// /api/auth/singin
app.post('/singin', async (req,res,next) => {
    const { correo, contra } = req.body
    const user = await Usuario.findOne({ correo })

    if( !user ) {
        console.log('Usuario con email ' + correo + ' no encontrado ')
        return handleLoginFailed(res,'El email no existe')
    }

    if( !comparePassword(contra, user.contra)){
        console.log('Password no coinciden: ' + contra + ' !== ' + user.contra )
        return handleLoginFailed(res, 'El correo y la contraseña no coinciden')
    }

    const token = createToken(user)
    res.status(200).json({
        message: 'Login exitoso',
        token,
        userId: user._id,
        nomUsuario: user.nomUsuario,
        firsName: user.nombre,
        lastNameP: user.apellidoP ,
        lastNameM: user.apellidoM,
        direccion: user.direccion,
        fNacimiento: user.fNacimiento,
        telefono: user.fNacimiento,
        email: user.correo,
        contra: user.contra,
        genero: user.genero,
        tipoUsuario: user.tipoUsuario,
        tarjeta: user.tarjeta  
    })

})

// /api/auth/singup
app.post('/singup', async (req, res,) => {
    const { nomUsuario, contra, nombre, apellidoP, apellidoM, correo, genero,
        tarjeta, tipoUsuario } = req.body;
    const t = new Tarjeta({
        numTarjeta: tarjeta.numTarjeta,
        mesExpiracion:  tarjeta.mesExpiracion,
        anioExpiracion: tarjeta.anioExpiracion,
        codigoSeguridad : tarjeta.codigoSeguridad
    })

    console.log('Tarjeta: ' + JSON.stringify(t))

    const u = new Usuario({
        nomUsuario: nomUsuario ,
        nombre: nombre,
        apellidoP: apellidoP,
        apellidoM: apellidoM,
        direccion: null,
        fNacimiento: new Date(),
        telefono: null,
        correo: correo,
        contra: hash(contra,10),
        genero: genero,
        tipoUsuario: tipoUsuario ,
        tarjeta: t
    })

    console.log('Creando nuevo usuario: ' + u )
    const usuario = await u.save()
    const token = createToken( usuario )
    res.status(200).json({
        message: 'Usuario salvado',
        token,
        userId: usuario._id,
        firsName: usuario.nombre,
        lastNameP: usuario.apellidoP,
        lastNameM: usuario.apellidoM,
        email: usuario.correo
    })
})

const createToken = (user) => jwt.sign({ user }, secret, { expiresIn: 86400 })


function handleLoginFailed(res, message) {
    return res.status(401).json({
        message: 'Login fallido',
        error: message || 'Email y password no encontrado'
    })
}