import React from 'react'
import styles from './styles.module.css'

function ReporterDataForm ({ reporterData = {}, onChangeReporter }) {
  const handleChangeReporter = ({ target }) => {
    const { name, value } = target
    onChangeReporter({
      ...reporterData,
      [name]: value
    })
  }

  return (
    <>
      <div className={styles.inputContainer}>
        <label>Email</label>
        <input
          type='email'
          name='email'
          value={reporterData.email || ''}
          onChange={handleChangeReporter}
        />
      </div>
      <div className={styles.inputContainer}>
        <label>Accept Conditions
        </label>
        <input
          type='checkbox'
          name='aceptCondition'
          checked={reporterData.aceptCondition}
          onChange={handleChangeReporter}
        />
      </div>
    </>
  )
}

export default ReporterDataForm
