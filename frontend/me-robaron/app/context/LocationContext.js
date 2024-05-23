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

  const handleLocationSelect = (location) => {
    setSelectedLocation(location)
  }

  return (
    <LocationContext.Provider value={{ selectedLocation, handleLocationSelect }}>
      {children}
    </LocationContext.Provider>
  )
}
