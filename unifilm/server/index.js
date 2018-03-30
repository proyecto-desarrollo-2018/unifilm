import http from 'http'
//import Debug from 'debug'
import Debug from 'debug'
import app from './app'
import mongoose from 'mongoose' 
import { mongoUrl } from './config'



const PORT =3000;
const debug = new Debug('unifilm:root')

mongoose.Promise = global.Promise

async function start() {
    await mongoose.connect(mongoUrl, { useMongoClient: true })

    app.listen(PORT, () => {
        debug('Server corriendo en el puerto ' + PORT)
    })
}

start()
