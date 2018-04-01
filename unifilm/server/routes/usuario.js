
import express from 'express';
import {  usuarioMiddleware } from '../middleware'
import { usuario } from '../db-api'
import { handleError } from '../utils'


const app = express.Router();




// GET /api/usuarios
app.get('/', async (req, res) => {
    try {
        const usuarios = await usuario.findAll()
        res.status(200).json(usuarios)
    } catch (error) {
        handleError(error, res)
    }
});


// GET /api/usuarios/:id
app.get('/:id', usuarioMiddleware, async (req, res) => {

    try {
        res.status(200).json(req.usuario)
    } catch (error) {
        handleError(error, res)
    }

});



export default app;
