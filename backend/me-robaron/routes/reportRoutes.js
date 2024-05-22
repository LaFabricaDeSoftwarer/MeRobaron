import { saveFormData } from '../controllers/formController.js'
import { saveFormDataLocation, getAllLocations } from '../controllers/formLocationController.js'
import express from 'express'

const router = express.Router()

router.post('/formulario', saveFormData)
router.get('/direcciones', getAllLocations)
router.post('/direcciones', saveFormDataLocation)

export default router
