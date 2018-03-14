import http from 'http'
import Debug from 'debug'
import app from './app'


const PORT =3000;
const debug = new Debug('unifilm:root')



app.listen(PORT, () =>{
    console.log( 'Server corriendo en el puerto ' + PORT )
})
