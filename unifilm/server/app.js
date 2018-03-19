import express from 'express'
import { usuario } from './routes'

const app = express()

app.use('/api/usuarios', usuario)

export default app
