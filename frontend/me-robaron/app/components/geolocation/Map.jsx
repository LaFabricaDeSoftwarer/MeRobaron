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

// import { useEffect, useState } from 'react'
// import { GoogleMap, Marker } from '@react-google-maps/api'
// // import styles from './styles.module.css'
// import { fetchLocations } from '../../services/apiServices'

// export default function Map () {
//   const [locations, setLocations] = useState([])
//   // const center = useMemo(() => selectedLocation || { lat: -31.43105, lng: -64.1899865 }, [selectedLocation])

//   useEffect(() => {
//     const fetchMapData = async () => {
//       try {
//         const locationsData = await fetchLocations()
//         setLocations(locationsData)
//         console.log('locationsData:', locationsData)
//       } catch (error) {
//         console.error('Error al obtener datos del mapa:', error.message)
//       }
//     }
//     fetchMapData()
//   }, [])

//   return (
//     <>
//       {/* <GoogleMap zoom={selectedLocation ? 30 : 10} center={center} mapContainerClassName={styles.mapContainer}>
//         {selectedLocation && <Marker position={selectedLocation} />} */}
//       <GoogleMap>
//         {locations.map((location) => (
//           (location.Latitud && location.Longitud) && (
//             <Marker key={location.DireccionID} position={{ lat: parseFloat(location.Latitud), lng: parseFloat(location.Longitud) }} />
//           )
//         ))}
//       </GoogleMap>

//     </>
//   )
// };
