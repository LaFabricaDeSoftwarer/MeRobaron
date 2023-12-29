import express from 'express'
import { saveLocation } from '../controllers/locationController.js'
import { getAllLocations } from '../controllers/locationController.js'

const router = express.Router()

// Ruta para manejar las solicitudes POST
router.post('/ubicacion', saveLocation)

// Ruta para obtener todas las ubicaciones almacenadas
router.get('/ubicaciones', getAllLocations);


export default router
