import { saveReporter } from '../controllers/reporterController.js'
import { saveReport } from '../controllers/reportController.js'
import { saveLocation, getAllLocations } from '../controllers/locationController.js'
import { saveReported } from '../controllers/reportedController.js'
import { saveVictim } from '../controllers/victimController.js'
import { saveWitness } from '../controllers/witnessController.js'
import { savePerson } from '../controllers/personController.js'
import express from 'express'

const router = express.Router()

router.post('/denunciante', saveReporter)
router.post('/denuncia', saveReport)
router.post('/ubicacion', saveLocation)
router.get('/ubicaciones', getAllLocations)
router.post('/denunciado', saveReported)
router.post('/victima', saveVictim)
router.post('/testigo', saveWitness)
router.post('/persona', savePerson)

export default router
