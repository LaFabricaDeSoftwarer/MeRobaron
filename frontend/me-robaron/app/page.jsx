'use client'
import Map from '@/app/ui/geolocation/map'
import style from '@/app//styles.module.css'

export default function Home () {
  return (
    <main className={style.content}>
      <div className={style.contentMap}>
        <Map />
      </div>
    </main>
  )
}
