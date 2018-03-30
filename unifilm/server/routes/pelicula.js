import express from 'express';
import { required } from '../middleware'
import { pelicula } from '../db-api'
import { handleError } from '../utils'

const app = express.Router();





function userMiddleware(req, res, next) {
  req.usuario = currentUser
  next()
}




// GET /api/peliculas
app.get('/', async (req, res ) => {
    try {
      const peliculas = await pelicula.findAll()
      res.status(200).json(peliculas)
    } catch(error) {
      handleError(error, res)
    }
} );


// GET /api/peliculas/:id
app.get('/:id', async ( req, res )  =>{
    
    try {
      const p  = await pelicula.findById(req.params.id)
      res.status(200).json(p)
    } catch ( error ){
      handleError(error, res)
    }

});

// POST /api/usuarios
/*app.post('/',currentUserMiddleware, (req, res) => {
  const usuario = req.body
  usuario.idUsuario = +new Date()
  usuario.tarjeta = req.currentUser      ejemplo de como deve ingresarse una tarjea que se esta usuando
  usuarios.push(usuario)
  res.status(201).json(usuario)
})*/

// POST /api/peliculas

app.post('/', required, (req, res) => {
  const pelicula = req.body
  pelicula.idPelicula = +new Date()
  pelicula.usuarioCalifico = req.usuario
  peliculas.push(pelicula)
  res.status(201).json(pelicula)
})

// POST /api/peliculas/:id/calificaciones

app.post('/:id/calificaciones', required, (req, res) => {
  const calificacion = req.body
  const p = req.pelicula
  calificacion.fechaCal = new Date()
  calificacion.usuarioCalifico = req.usuario
  p.calificacion.push(calificacion)
  res.status(201).json(calificacion)
})

export default app;
