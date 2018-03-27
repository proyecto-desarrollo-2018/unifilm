import express from 'express'
import jwt from 'jsonwebtoken'

const app = express.Router()

export default app

const secret = 'miclavesecreta' 

const users = [{
        idUsuario: 1,
        nomUsuario: 'Gerardo',
        nombre: 'Gerardo',
        apellidoP: 'Alderete',
        apellidoM: 'Flores',
        direccion: 'Ojo de Agua',
        fNacimiento: new Date(),
        telefono: '7687678765',
        correo: 'ge_call@hotmail.com',
        contra: 'gerardo',
        genero: '12345',
        tipoUsuario: 'admin',
        tarjeta: {
            idTarjeta: '1',
            numTarjeta: '1234567890098765',
            mesExpiracion: 'Enero',
            anioExpiracion: '2019',
            codigoSeguridad: '123'

        }

    },
    {
        idUsuario: 2,
        nomUsuario: 'Alfredo',
        nombre: 'Alfredo',
        apellidoP: 'Sanchez',
        apellidoM: 'Nieto',
        direccion: null,
        fNacimiento: null,
        telefono: null,
        correo: 'alfredo@hotmail.com',
        contra: 'alfredo',
        genero: null,
        tipoUsuario: 'admin',
        tarjeta: null
    },

    {
        idUsuario: 3,
        nomUsuario: 'Kevin',
        nombre: 'Kevin Sebastian',
        apellidoP: 'Valles',
        apellidoM: 'Guerrero',
        direccion: null,
        fNacimiento: null,
        telefono: null,
        correo: 'kevin@hotmail.com',
        contra: 'kevin',
        genero: null,
        tipoUsuario: 'admin',
        tarjeta: null
    },
    {
        idUsuario: 4,
        nomUsuario: 'Alejandra',
        nombre: 'Alejandra Iris',
        apellidoP: 'Barojas',
        apellidoM: 'Hernandez',
        direccion: null,
        fNacimiento: null,
        telefono: null,
        correo: 'alejandra@hotmail.com',
        contra: 'alejandra',
        genero: null,
        tipoUsuario: 'admin',
        tarjeta: null
    }


]

const findUserByEmail = e => users.find(({ correo }) => correo === e )

function comparePassword ( providedPassword, userPassword ) {
    return providedPassword === userPassword
}

// /api/auth/singin
app.post('/singin', (req,res,next) => {
    const { correo, contra } = req.body
    const user = findUserByEmail(correo)

    if( !user ) {
        console.log('Usuario con email ' + correo + ' no encontrado ')
        return handleLoginFailed(res)
    }

    if( !comparePassword(contra, user.contra)){
        console.log('Password no coinciden: ' + contra + ' !== ' + user.contra )
        return handleLoginFailed(res, 'El correo y la contraseña no coinciden')
    }

    const token = createToken(user)
    res.status(200).json({
        message: 'Login exitoso',
        token,
        userId: user.idUsuario,
        firsName: user.nombre,
        lastNameP: user.apellidoP ,
        lastNameM: user.apellidoM,
        email: user.correo
    })

})

// /api/auth/singup
app.post('/singup', (req, res,) => {
    const { nombreU, contra, nombre, apellidoP, apellidoM, correo, sexo,
        numeroTarjeta, mesFE, anioFE, codigoS } = req.body;
    const user = {
        idUsuario: +new Date(),
        nomUsuario: nombreU ,
        nombre: nombre,
        apellidoP: apellidoP,
        apellidoM: apellidoM,
        direccion: null,
        fNacimiento: new Date(),
        telefono: null,
        correo: correo,
        contra: contra,
        genero: sexo,
        tipoUsuario: 'admin',
        tarjeta: {
            idTarjeta: +new Date(),
            numTarjeta: numeroTarjeta,
            mesExpiracion: mesFE ,
            anioExpiracion: anioFE ,
            codigoSeguridad: codigoS

        }

    
    }

    console.log('Creando nuevo usuario: ' + user )
    users.push( user )
    const token = createToken( user )
    res.status(200).json({
        message: 'Usuario salvado',
        token,
        userId: user.idUsuario,
        firsName: user.nombre,
        lastNameP: user.apellidoP,
        lastNameM: user.apellidoM,
        email: user.correo
    })
})

const createToken = (user) => jwt.sign({ user }, secret, { expiresIn: 86400 })


function handleLoginFailed(res, message) {
    return res.status(401).json({
        message: 'Login fallido',
        error: message || 'Email y password no encontrado'
    })
}