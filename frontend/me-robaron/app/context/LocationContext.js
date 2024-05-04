'use client'
import React, { createContext, useContext, useState } from 'react'

const LocationContext = createContext()

export const useLocation = () => useContext(LocationContext)

export const LocationProvider = ({ children }) => {
  const [selectedLocation, setSelectedLocation] = useState({
    direccion: '',
    latitud: 0,
    longitud: 0
  })

  const locationSaved = (newAddress) => {
    const { direccion, latitud, longitud } = newAddress
    setSelectedLocation({ direccion, latitud, longitud })
    console.log('direccion guardada en el contexto:', newAddress)
  }

  return (
    <LocationContext.Provider value={{ selectedLocation, setSelectedLocation, locationSaved }}>
      {children}
    </LocationContext.Provider>
  )
}
