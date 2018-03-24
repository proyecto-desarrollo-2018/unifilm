import express from 'express';

const app = express.Router();

const currentUser = {
  idUsuario: 1,
  nomUsuario: 'Gerardo92',
  nombre: 'Gerardo',
  apellidoP: 'Alderete',
  apellidoM: 'Flores',
  direccion: 'Ojo de Agua',
  fNacimiento: new Date(),
  telefono: '7687678765',
  correo: 'ge_call@hotmail.com',
  contra: '123456',
  genero: '12345',
  tipoUsuario: 'admin',
  tarjeta: {
    idTarjeta: '1',
    numTarjeta: '1234567890098765',
    mesExpiracion: 'Enero',
    anioExpiracion: '2019',
    codigoSeguridad: '123'

  }
}

function usuarioMiddleware(req, res, next) {
  const { id } = req.params
  req.usuario = usuarios.find(({ idUsuario }) => idUsuario === +id)
  next()
}

function currentUserMiddleware(req, res, next) {
    req.currentUser = currentUser
    next() 
}

const usuario = {
      idUsuario: 1,
      nomUsuario: 'Gerardo',
      nombre: 'Gerardo',
      apellidoP: 'Alderete',
      apellidoM: 'Flores',
      direccion: 'Ojo de Agua',
      fNacimiento: new Date(),
      telefono: '7687678765',
      correo: 'ge_call@hotmail.com',
      contra: '123456',
      genero: '12345',
      tipoUsuario: 'admin',
      tarjeta: {
        idTarjeta: '1',
        numTarjeta: '1234567890098765',
        mesExpiracion: 'Enero',
        anioExpiracion: '2019',
        codigoSeguridad: '123'

      }};


const usuarios = [{
       idUsuario  : 1,
         nomUsuario  : 'Gerardo',
         nombre  : 'Gerardo',
         apellidoP  : 'Alderete',
         apellidoM  : 'Flores',
         direccion  : 'Ojo de Agua',
         fNacimiento  : new Date(),
         telefono  : '7687678765',
         correo  : 'ge_call@hotmail.com',
         contra  : '123456',
         genero  : '12345',
         tipoUsuario  : 'admin',
         tarjeta  : {
              idTarjeta : '1',
              numTarjeta : '1234567890098765',
              mesExpiracion : 'Enero',
              anioExpiracion : '2019',
              codigoSeguridad  : '123'

         }

}, {
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
  correo: null,
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
  correo: null,
  contra: 'kevin88',
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
  correo: null,
  contra: 'alejandra',
  genero: null,
  tipoUsuario: 'admin',
  tarjeta: null
}



];

//const usuarios = new Array(10).fill(usuario);

// GET /api/usuarios
app.get('/', (req, res ) => {
  setTimeout(() => {
    res.status(200).json(usuarios) 

  }, 2000);
} );


// GET /api/usuarios/:id
app.get('/:id', usuarioMiddleware, ( req, res )  =>{
  setTimeout( () => {
    
    res.status(200).json(req.usuario)
  }, 2000);
} );

// POST /api/usuarios
/*app.post('/',currentUserMiddleware, (req, res) => {
  const usuario = req.body
  usuario.idUsuario = +new Date()
  usuario.tarjeta = req.currentUser      ejemplo de como deve ingresarse una tarjea que se esta usuando
  usuarios.push(usuario)
  res.status(201).json(usuario)
})*/

app.post('/', (req, res) => {
  const usuario = req.body
  usuario.idUsuario = +new Date()
  usuarios.push(usuario)
  res.status(201).json(usuario)
})

export default app;
