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
  contra: '12345',
  genero: '12345',
  tipoUsuario: 'admin',
  tarjeta: {
    idTarjeta: '1',
    numTarjeta: '1234567890098765',
    mesExpiracion: 'Enero',
    anioExpiracion: '2019',
    codigoSeguridad: '123'
  }
};

function peliculaMiddleware(req, res, next) {
  const { id } = req.params
  req.pelicula = peliculas.find(({ idPelicula }) => idPelicula === +id)
  next()
}

function userMiddleware(req, res, next) {
  req.usuario = currentUser
  next()
}


const pelicula = {
   idPelicula: 1,
   titulo: 'Superman',
   directores: [{idDirector: '',
                nombre: '',
                apPaterno: '',
                apMaterno: '',
                tipoDirector: ''}],
    actores: [{
              idActor: '',
              nombre: '',
              apPaterno: '',
              apMaterno: '',
              tipoActor: ''
            }],
    generos: ['Accion'],
    anioProduccion: new Date(),
    fechaAdicion: new Date(),
    sinopsis: '',
    clasificacion: ['AA'],
    duracion: 123,
    casaProductora: '',
    calificacion: [{
        idCalificacion: '',
        calificacion: '',
        pelicula: null,
        usuarioCalifico: null,
        comentario: '',
        fechaCal: ''
                }] ,
  urlPortada: 'https://vignette.wikia.nocookie.net/superman/images/d/d3/Man_of_Steel_Poster.png/revision/latest?cb=20131230190352&path-prefix=es',
   urlPelicula: ''     

};





const peliculas = new Array(10).fill(pelicula);


;
// GET /api/peliculas
app.get('/', (req, res ) => {
  setTimeout(() => {
    res.status(200).json(peliculas) 

  }, 2000);
} );


// GET /api/peliculas/:id
app.get('/:id', peliculaMiddleware, ( req, res )  =>{
  setTimeout( () => {
    
    res.status(200).json(req.pelicula)
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

// POST /api/peliculas

app.post('/', userMiddleware, (req, res) => {
  const pelicula = req.body
  pelicula.idPelicula = +new Date()
  pelicula.usuarioCalifico = req.usuario
  peliculas.push(pelicula)
  res.status(201).json(pelicula)
})

// POST /api/peliculas/:id/calificaciones

app.post('/:id/calificaciones', peliculaMiddleware, userMiddleware, (req, res) => {
  const calificacion = req.body
  const p = req.pelicula
  calificacion.fechaCal = new Date()
  calificacion.usuarioCalifico = req.usuario
  p.calificacion.push(calificacion)
  res.status(201).json(calificacion)
})

export default app;
