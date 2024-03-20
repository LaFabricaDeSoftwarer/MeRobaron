import { GoogleMap, Marker } from '@react-google-maps/api'
import styles from './styles.module.css'

export default function Map ({ locations }) {
  const center = { lat: -31.4167, lng: -64.1833 }
  const zoom = 12

  return (
    <GoogleMap mapContainerClassName={styles.mapContainer} zoom={zoom} center={center}>
      {locations.map((location) => (
        (location.Latitud && location.Longitud) && (
          <Marker key={location.DireccionID} position={{ lat: parseFloat(location.Latitud), lng: parseFloat(location.Longitud) }} />
        )
      ))}
    </GoogleMap>
  )
}
