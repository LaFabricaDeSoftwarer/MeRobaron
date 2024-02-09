// services/apiServices/apiService.js
export const saveLocation = async ({ locationData }) => {
  try {
    const response = await fetch('http://localhost:3001/ubicacion', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ locationData })
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

export const savePerson = async (personData) => {
  try {
    const response = await fetch('http://localhost:3001/persona', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(personData)
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
    const response = await fetch('http://localhost:3001/ubicaciones')
    if (response.ok) {
      const data = await response.json()
      console.log('Datos de ubicaciones obtenidos correctamente:', data)
      return data
    } else {
      throw new Error('Error al obtener datos del backend')
    }
  } catch (error) {
    console.error(`Error: ${error.message}`)
    throw new Error(`Error: ${error.message}`)
  }
}

export const saveReport = async (reportData) => {
  try {
    const response = await fetch('http://localhost:3001/denuncia', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(reportData)
    })

    if (response.ok) {
      const data = await response.json()
      console.log('Datos de denuncia guardados correctamente:', data)
      return data
    } else {
      throw new Error('Error al enviar datos de denuncia al backend')
    }
  } catch (error) {
    throw new Error(`Error: ${error.message}`)
  }
}

export const saveReporter = async (reporterData) => {
  try {
    const response = await fetch('http://localhost:3001/denunciante', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(reporterData)
    })

    if (response.ok) {
      const data = await response.json()
      console.log('Datos del denunciante guardados correctamente:', data)
      return data
    } else {
      throw new Error('Error al enviar datos del denunciante al backend')
    }
  } catch (error) {
    throw new Error(`Error: ${error.message}`)
  }
}

export const saveReported = async (reportedData) => {
  try {
    const response = await fetch('http://localhost:3001/denunciado', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(reportedData)
    })

    if (response.ok) {
      const data = await response.json()
      console.log('Datos del denunciado guardados correctamente:', data)
      return data
    } else {
      throw new Error('Error al enviar datos del denunciado al backend')
    }
  } catch (error) {
    throw new Error(`Error: ${error.message}`)
  }
}

export const saveVictim = async (victimData) => {
  try {
    const response = await fetch('http://localhost:3001/victima', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(victimData)
    })

    if (response.ok) {
      const data = await response.json()
      console.log('Datos de la victima guardados correctamente:', data)
      return data
    } else {
      throw new Error('Error al enviar datos de la victima al backend')
    }
  } catch (error) {
    throw new Error(`Error: ${error.message}`)
  }
}

export const saveWitness = async (witnessData) => {
  try {
    const response = await fetch('http://localhost:3001/testigo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(witnessData)
    })

    if (response.ok) {
      const data = await response.json()
      console.log('Datos del testigo guardados correctamente:', data)
      return data
    } else {
      throw new Error('Error al enviar datos del testigo al backend')
    }
  } catch (error) {
    throw new Error(`Error: ${error.message}`)
  }
}
