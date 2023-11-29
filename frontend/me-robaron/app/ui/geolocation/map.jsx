import { useMemo, useState } from 'react'
import { GoogleMap, Marker } from '@react-google-maps/api'
import Geolocation from '@/app/ui/geolocation/geolocation'

export default function Map () {
  const center = useMemo(() => ({ lat: 43.45, lng: -80.49 }), [])
  const [selected, setSelected] = useState(null)

  const mapContainerStyle = {
    width: '100%',
    height: '400px'
  }

  return (
    <>
      <div className='places-container'>
        <Geolocation setSelected={setSelected} />
      </div>

      <GoogleMap
        zoom={10}
        center={center}
        mapContainerStyle={mapContainerStyle}
      >
        {selected && <Marker position={selected} />}
      </GoogleMap>
    </>
  )
};
