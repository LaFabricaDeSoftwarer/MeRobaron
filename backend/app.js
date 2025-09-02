import express from 'express'
import cors from 'cors'
import reportRoutes from './routes/reportRoutes.js'

const app = express()
const PORT = process.env.PORT || 3003

// Middleware
app.use(cors())
app.use(express.json())

// Rutas
app.use('/api', reportRoutes)

// Ruta de prueba
app.get('/', (req, res) => {
  res.json({ message: 'API MeRobaron funcionando correctamente' })
})

// Manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({ error: 'Algo salió mal!' })
})

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en puerto ${PORT}`)
})

export default app
