import express from 'express'
import { saveLocation } from '../controllers/locationController.js'

const router = express.Router()

// Ruta para manejar las solicitudes POST
router.post('/ubicacion', saveLocation)

export default router
