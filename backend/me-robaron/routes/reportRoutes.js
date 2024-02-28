import { saveFormData } from '../controllers/formController.js'
import { getAllLocations } from '../controllers/locationsController.js'
import express from 'express'

const router = express.Router()

router.post('/formulario', saveFormData)
router.get('/direcciones', getAllLocations)

export default router
