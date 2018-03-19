import express from 'express';

const app = express.Router();

const usuario = {
       idUsuario  : 1,
         nomUsuario  : 'Gerardo92',
         nombre  : 'Gerardo',
         apellidoP  : 'Alderete',
         apellidoM  : 'Flores',
         direccion  : 'Ojo de Agua',
         fNacimiento  : new Date(),
         telefono  : '7687678765',
         correo  : 'ge_call@hotmail.com',
         contra  : '12345',
         genero  : '12345',
         tipoUsuario  : 'admin',
         tarjeta  : {
              idTarjeta : '1',
              numTarjeta : '1234567890098765',
              mesExpiracion : 'Enero',
              anioExpiracion : '2019',
              codigoSeguridad  : '123'

         }

};

const usuarios = new Array(10).fill(usuario);

// /api/usuarios
app.get('/', (req, res ) => res.status(200).json(usuarios) );


// /api/usuarios/:id
app.get('/:id', ( req, res )  => res.status(200).json(usuario));

export default app;
