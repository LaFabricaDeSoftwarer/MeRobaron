import Location from '../models/locationModel.js'

export const saveLocation = (req, res) => {
  const { address, latitude, longitude } = req.body
  const location = new Location(address, latitude, longitude)
  console.log('Dirección:', location.address)
  console.log('Latitud:', location.latitude)
  console.log('Longitud:', location.longitude)

  // Puedes enviar una respuesta de vuelta al cliente si lo deseas
  res.json({ message: 'Datos recibidos correctamente' })
}
