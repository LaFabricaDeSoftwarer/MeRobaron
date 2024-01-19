import { useMemo, useEffect } from 'react'
import { GoogleMap, Marker } from '@react-google-maps/api'
import Geolocation from '@/app/ui/geolocation/geolocation'
import styles from '@/app/ui/geolocation/styles.module.css'
import { fetchLocations } from '@/app/services/apiServices'

export default function Map ({ selected, setSelected, locations, setLocations }) {
  const center = useMemo(() => selected || { lat: -31.43105, lng: -64.1899865 }, [selected])

  useEffect(() => {
    const fetchMapData = async () => {
      try {
        const locationsData = await fetchLocations()
        setLocations(locationsData)
      } catch (error) {
        console.error('Error al obtener datos del mapa:', error.message)
      }
    }
    fetchMapData()
  }, [])

  return (
    <>
      <div className={styles.placesContainer}>
        <Geolocation setSelected={setSelected} />
      </div>

      <GoogleMap zoom={selected ? 30 : 10} center={center} mapContainerClassName={styles.mapContainer}>
        {selected && <Marker position={selected} />}
        {locations.map((location) => (
          (location.Latitud && location.Longitud) && (
            <Marker key={location.DireccionID} position={{ lat: parseFloat(location.Latitud), lng: parseFloat(location.Longitud) }} />
          )
        ))}
      </GoogleMap>

    </>
  )
};
