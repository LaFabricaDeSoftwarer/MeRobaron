'use client'
import { useLoadScript } from '@react-google-maps/api'
import Geolocation from '@/app/ui/geolocation/geolocation'

export default function Home () {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries: ['places']
  })

  if (!isLoaded) return <div>Loading...</div>

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div>
        <h1>Obtener coordenadas</h1>
        <Geolocation />
      </div>
    </main>
  )
}
