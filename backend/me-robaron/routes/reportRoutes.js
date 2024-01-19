import express from 'express'
import { saveReport } from '../controllers/reportController.js'
import { saveUser } from '../controllers/userController.js'
import { saveLocation, getAllLocations } from '../controllers/locationController.js'

const router = express.Router()

router.post('/usuario', saveUser)
router.post('/ubicacion', saveLocation)
router.get('/ubicaciones', getAllLocations)
router.post('/denuncia', saveReport)

export default router
