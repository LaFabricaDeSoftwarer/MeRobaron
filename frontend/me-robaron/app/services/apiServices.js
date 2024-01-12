// services/apiServices/apiService.js
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

export const saveReport = async (reportData) => {
  try {
    const response = await fetch('http://localhost:1234/denuncia', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(reportData)
    })

    if (response.ok) {
      const data = await response.json()
      return data
    } else {
      throw new Error('Error al enviar datos de denuncia al backend')
    }
  } catch (error) {
    throw new Error(`Error: ${error.message}`)
  }
}

export const saveUser = async (userData) => {
  try {
    const response = await fetch('http://localhost:1234/usuario', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })

    if (response.ok) {
      const data = await response.json()
      return data
    } else {
      throw new Error('Error al enviar datos de usuario al backend')
    }
  } catch (error) {
    throw new Error(`Error: ${error.message}`)
  }
}

export const fetchLocations = async () => {
  try {
    const response = await fetch('http://localhost:1234/ubicaciones')
    if (response.ok) {
      const data = await response.json()
      console.log('Ubicaciones obtenidas correctamente:', data)
      return data
    } else {
      throw new Error('Error al obtener datos del backend')
    }
  } catch (error) {
    console.error(`Error: ${error.message}`)
    throw new Error(`Error: ${error.message}`)
  }
}
