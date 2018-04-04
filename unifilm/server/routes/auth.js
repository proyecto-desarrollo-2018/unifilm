import express from 'express'
import jwt from 'jsonwebtoken'
import { secret } from '../config'
import { Usuario, Tarjeta } from '../models'
import { required, usuarioMiddleware } from '../middleware'
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
    const { nomUsuario,
nombre,
apellidoP,
apellidoM,
direccion,
fNacimiento,
telefono,
correo,
contra,
genero,
tipoUsuario,
tarjeta } = req.body;
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
        direccion: direccion,
        fNacimiento: fNacimiento ,
        telefono: telefono,
        correo: correo,
        contra: hash(contra,10),
        genero: genero,
        tipoUsuario: tipoUsuario ,
        tarjeta: []
    })

    console.log('Creando nuevo usuario: ' + u )
    const usuario = await u.save()


    //añadiendo tarjeta
    const tarjetaSalvada = await t.save()
    const usuarioTarjeta = usuario;
    usuarioTarjeta.tarjeta.push(usuarioTarjeta) ;
    const usuarioS = new Usuario(usuarioTarjeta)
    await usuarioS.save();
    console.log('usuario con tarjeta: ' + JSON.stringify(usuarioS))
    //--------------------

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


// POST /api/usuarios/:id/tarjetas

app.post('/:id/tarjetas', required, usuarioMiddleware, async (req, res) => {

    const u = req.usuario

    const { numTarjeta,
mesExpiracion,
anioExpiracion,
codigoSeguridad
 } = req.body

    console.log('Comentario: ' + comentario);
    const t = new Tarjeta({
        numTarjeta,
mesExpiracion,
anioExpiracion,
codigoSeguridad,
        usuario: new Usuario(req.user)
    })

    const savedTarjeta = await t.save()

    u.tarjeta.push(savedTarjeta)

    const us = new Usuario(u)
    await us.save()
    res.status(201).json(savedTarjeta)

})