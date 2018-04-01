import express from 'express';
import { required, peliculaMiddleware } from '../middleware'
import { pelicula } from '../db-api'
import { handleError } from '../utils'
import { Pelicula, Director, Actor,Usuario , Calificacion} from '../models'


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
app.get('/:id', peliculaMiddleware ,async ( req, res )  =>{
    
    try {
      res.status(200).json(req.pelicula)
    } catch ( error ){
      handleError(error, res)
    }

});


// POST /api/peliculas

app.post('/', required, async (req, res) => {
  const { titulo,
    nombreD,
    apPaternoD,
    apMaternoD,
    director,
    nombreA,
    apPaternoA,
    apMaternoA,
    tipoActor,
    generos,
    anioProduccion,
    sinopsis,
    clasificacion,
    duracion,
    casaProductora,
    calificacion,
    urlPortada,
    urlPelicula
           } = req.body

  const p = new Pelicula({
    titulo,
    directores: new Director({
      nombre: nombreD,
      apPaterno: apPaternoD,
      apMaterno: apMaternoD,
      tipoDirector: director
    }),
    actores: new Actor({
      nombre: nombreA,
      apPaterno: apPaternoA,
      apMaterno: apMaternoA,
      tipoActor: tipoActor
    }),
    generos,
    anioProduccion,
    fechaAdicion : new Date(),
    sinopsis,
    clasificacion,
    duracion,
    casaProductora,
    calificacion: calificacion,
    urlPortada,
    urlPelicula,
    usuarioAgrego: req.user._id
  })
  try{
    const savedPelicula = await pelicula.create(p)
    res.status(201).json(savedPelicula)
  }catch(error){
    handleError(error,res)
  }

})

// POST /api/peliculas/:id/calificaciones

app.post('/:id/calificaciones', required, peliculaMiddleware, async (req, res) => {

const p = req.pelicula

  const { calificacion,
    comentario,
    fechaCal } = req.body

  console.log('Comentario: ' + comentario);
  const c = new Calificacion({
      calificacion,
      comentario,
      fechaCal: new Date(),
      usuario: new Usuario(req.user),
  })
  //console.log('CALIFICACION: ' + JSON.stringify(c));

    

    const savedCalificacion = await c.save()


    p.calificacion.push(savedCalificacion)

  const pel = new Pelicula(p)

    //console.log('PEL: ' + JSON.stringify(pel));

    await pel.save()
    
    
    
    
    
   // console.log( 'SAVEDCALIFICACION: ' + savedCalificacion);
    res.status(201).json(savedCalificacion)

})

export default app;
