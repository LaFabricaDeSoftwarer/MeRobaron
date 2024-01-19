'use client'
import style from '@/app//styles.module.css'
import ReportForm from '@/app/ui/reportForm/reportForm'

export default function Home () {
  return (
    <main className={style.content}>
      <ReportForm />
    </main>
  )
}
