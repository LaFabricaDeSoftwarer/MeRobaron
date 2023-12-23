// services/apiServices/locationApi.js
export const saveLocation = async ({ address, latitude, longitude }) => {
  try {
    const response = await fetch('http://localhost:1234/ubicacion', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ address, latitude, longitude })
    })

    if (response.ok) {
      const data = await response.json()
      return data
    } else {
      throw new Error('Error al enviar datos al backend')
    }
  } catch (error) {
    throw new Error(`Error: ${error.message}`)
  }
}
