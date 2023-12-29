import { useMemo, useState, useEffect } from 'react'
import { GoogleMap, Marker } from '@react-google-maps/api'
import Geolocation from '@/app/ui/geolocation/geolocation'
import styles from '@/app/ui/geolocation/styles.module.css'
import { fetchLocations } from '@/app/services/apiServices'

export default function Map () {
  const [selected, setSelected] = useState(null)
  const [locations, setLocations] = useState([])
  console.log('locations', locations)
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

      <GoogleMap zoom={selected ? 15 : 5} center={center} mapContainerClassName={styles.mapContainer}>
        {selected && <Marker position={selected} />}
        {locations.map((location) => (
          (location.latitud && location.longitud) && (
            <Marker key={location.id} position={{ lat: parseFloat(location.latitud), lng: parseFloat(location.longitud) }} />
          )
        ))}
      </GoogleMap>

    </>
  )
};
