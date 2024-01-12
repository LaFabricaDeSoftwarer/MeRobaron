// app.js
import express from 'express'
import cors from 'cors'
import reportRoutes from './routes/reportRoutes.js'

const app = express()
const PORT = 1234

// Middleware para parsear el cuerpo de la solicitud como JSON
app.use(express.json())

app.use(cors())

// Ruta
app.use('/', reportRoutes)

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor Express escuchando en el puerto ${PORT}`)
})
