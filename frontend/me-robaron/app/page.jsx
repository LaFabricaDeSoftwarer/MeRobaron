'use client'
import { useLoadScript } from '@react-google-maps/api'
import Map from '@/app/ui/geolocation/map'

export default function Home () {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries: ['places']
  })

  if (!isLoaded) return <div>Loading...</div>

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div>
        <Map />
      </div>
    </main>
  )
}
