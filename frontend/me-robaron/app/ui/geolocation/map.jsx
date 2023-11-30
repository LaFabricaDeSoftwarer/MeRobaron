import { useMemo, useState } from 'react'
import { GoogleMap, Marker } from '@react-google-maps/api'
import Geolocation from '@/app/ui/geolocation/geolocation'
import styles from '@/app/ui/geolocation/styles.module.css'

export default function Map () {
  const center = useMemo(() => ({ lat: -31.43105, lng: -64.1899865 }), [])
  const [selected, setSelected] = useState(null)

  return (
    <>
      <div className={styles.placesContainer}>
        <Geolocation setSelected={setSelected} />
      </div>

      <GoogleMap
        zoom={10}
        center={center}
        mapContainerClassName={styles.mapContainer}
      >
        {selected && <Marker position={selected} />}
      </GoogleMap>
    </>
  )
};
