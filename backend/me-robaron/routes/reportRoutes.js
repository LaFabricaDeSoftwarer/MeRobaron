import { saveFormData } from '../controllers/formController.js'
import { getAllLocations } from '../controllers/locationsController.js'
import { saveFormDataLocation } from '../controllers/formLocation.js'
import express from 'express'

const router = express.Router()

router.post('/formulario', saveFormData)
router.get('/direcciones', getAllLocations)
router.post('/direcciones', saveFormDataLocation)

export default router
