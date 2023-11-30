'use client'
import { useLoadScript } from '@react-google-maps/api'
import Map from '@/app/ui/geolocation/map'
import style from '@/app//styles.module.css'

export default function Home () {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries: ['places']
  })

  if (!isLoaded) return <div>Loading...</div>

  return (

    <main className={style.content}>
      <div className={style.contentMap}>
        <Map />
      </div>
    </main>
  )
}
