'use client'
import style from '@/app//styles.module.css'
import ReportDetailForm from './components/reportDetailForm/ReportDetailForm'

export default function Home () {
  return (
    <main className={style.content}>
      <ReportDetailForm />
    </main>
  )
}
