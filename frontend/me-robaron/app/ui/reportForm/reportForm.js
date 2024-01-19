// components/ReportForm.js
import React, { useState } from 'react'
import { saveUser, saveLocation, saveReport } from '@/app/services/apiServices'
import styles from '@/app/ui/reportForm/styles.module.css'
import Map from '@/app/ui/geolocation/map'

export default function ReportForm () {
  const [userData, setUserData] = useState({
    apellido: '',
    nombre: '',
    tipoDocumento: '',
    nroDocumento: '',
    edad: '',
    telefono: '',
    calle: '',
    numero: '',
    barrio: '',
    ciudad: '',
    nacionalidad: '',
    estadoCivil: '',
    ocupacion: '',
    nivelEstudio: '',
    correoElectronico: ''
  })

  const [reportData, setReportData] = useState({
    usuarioID: '',
    fecha: '',
    horaAproximada: '',
    otrasReferencias: '',
    escenarioDelHecho: '',
    detalle: '',
    direccionID: '',
    medioTransportePersona: '',
    tiposObjetosSustraidos: ''
  })

  const [selectedLocation, setSelectedLocation] = useState(null)
  const [locations, setLocations] = useState([])

  const handleReportSubmit = async () => {
    try {
      // Guardo la ubicación y obtengo su id
      await saveLocation({
        address: selectedLocation.address,
        latitude: selectedLocation.lat,
        longitude: selectedLocation.lng
      })
      const userDataSaved = await saveUser(userData)

      const reportDataSaved = await saveReport({
        ...reportData,
        usuarioID: userDataSaved.UsuarioID,
        direccionID: userDataSaved.DireccionID
      })

      console.log('Datos de denuncia guardados correctamente:', reportDataSaved)
    } catch (error) {
      console.error('Error al guardar datos:', error.message)
    }
  }

  return (
    <form>
      <div className={styles.contentForm}>
        {/* -----------------------Datos del usuario-----------------------  */}
        <div className={styles.columnForm}>
          <div>
            <h2 className={styles.subtitleForm}>Datos del usuario</h2>
          </div>
          <div>
            <label className={styles.labelForm}>Apellido:</label>
            <input type='text' value={userData.apellido} onChange={(e) => setUserData({ ...userData, apellido: e.target.value })} className={styles.inputForm} />
          </div>
          <div>
            <label className={styles.labelForm}>Nombre:</label>
            <input type='text' value={userData.nombre} onChange={(e) => setUserData({ ...userData, nombre: e.target.value })} className={styles.inputForm} />
          </div>
          <div>
            <label className={styles.labelForm}>Tipo de documento:</label>
            <input type='text' value={userData.tipoDocumento} onChange={(e) => setUserData({ ...userData, tipoDocumento: e.target.value })} className={styles.inputForm} />
          </div>
          <div>
            <label className={styles.labelForm}>Número de documento:</label>
            <input type='number' value={userData.nroDocumento} onChange={(e) => setUserData({ ...userData, nroDocumento: e.target.value })} className={styles.inputForm} />
          </div>
          <div>
            <label className={styles.labelForm}>Edad:</label>
            <input type='number' value={userData.edad} onChange={(e) => setUserData({ ...userData, edad: e.target.value })} className={styles.inputForm} />
          </div>
          <div>
            <label className={styles.labelForm}>Teléfono:</label>
            <input type='number' value={userData.telefono} onChange={(e) => setUserData({ ...userData, telefono: e.target.value })} className={styles.inputForm} />
          </div>
          <div>
            <label className={styles.labelForm}>Calle:</label>
            <input type='text' value={userData.calle} onChange={(e) => setUserData({ ...userData, calle: e.target.value })} className={styles.inputForm} />
          </div>
          <div>
            <label className={styles.labelForm}>Número:</label>
            <input type='number' value={userData.numero} onChange={(e) => setUserData({ ...userData, numero: e.target.value })} className={styles.inputForm} />
          </div>
          <div>
            <label className={styles.labelForm}>Barrio:</label>
            <input type='text' value={userData.barrio} onChange={(e) => setUserData({ ...userData, barrio: e.target.value })} className={styles.inputForm} />
          </div>
          <div>
            <label className={styles.labelForm}>Ciudad:</label>
            <input type='text' value={userData.ciudad} onChange={(e) => setUserData({ ...userData, ciudad: e.target.value })} className={styles.inputForm} />
          </div>
          <div>
            <label className={styles.labelForm}>Nacionalidad:</label>
            <input type='text' value={userData.nacionalidad} onChange={(e) => setUserData({ ...userData, nacionalidad: e.target.value })} className={styles.inputForm} />
          </div>
          <div>
            <label className={styles.labelForm}>Estado civil:</label>
            <input type='text' value={userData.estadoCivil} onChange={(e) => setUserData({ ...userData, estadoCivil: e.target.value })} className={styles.inputForm} />
          </div>
          <div>
            <label className={styles.labelForm}>Ocupación:</label>
            <input type='text' value={userData.ocupacion} onChange={(e) => setUserData({ ...userData, ocupacion: e.target.value })} className={styles.inputForm} />
          </div>
          <div>
            <label className={styles.labelForm}>Nivel de estudio:</label>
            <input type='text' value={userData.nivelEstudio} onChange={(e) => setUserData({ ...userData, nivelEstudio: e.target.value })} className={styles.inputForm} />
          </div>
          <div>
            <label className={styles.labelForm}>Correo electrónico:</label>
            <input type='email' value={userData.correoElectronico} onChange={(e) => setUserData({ ...userData, correoElectronico: e.target.value })} className={styles.inputForm} />
          </div>
        </div>

        {/* -----------------------Datos de la denuncia-----------------------  */}

        <div className={styles.columnForm}>
          <div>
            <h2 className={styles.subtitleForm}>Datos de la denuncia</h2>
          </div>
          <div>
            <label className={styles.labelForm}>Fecha:</label>
            <input type='date' value={reportData.fecha} onChange={(e) => setReportData({ ...reportData, fecha: e.target.value })} className={styles.inputForm} />
          </div>
          <div>
            <label className={styles.labelForm}>Hora aproximada:</label>
            <input type='time' value={reportData.horaAproximada} onChange={(e) => setReportData({ ...reportData, horaAproximada: e.target.value })} className={styles.inputForm} />
          </div>
          <div>
            <label className={styles.labelForm}>Otras referencias:</label>
            <input type='text' value={reportData.otrasReferencias} onChange={(e) => setReportData({ ...reportData, otrasReferencias: e.target.value })} className={styles.inputForm} />
          </div>
          <div>
            <label>Escenario del hecho:</label>
            <input type='text' value={reportData.escenarioDelHecho} onChange={(e) => setReportData({ ...reportData, escenarioDelHecho: e.target.value })} className={styles.inputForm} />
          </div>
          <div>
            <label className={styles.labelForm}>Detalle:</label>
            <input type='text' value={reportData.detalle} onChange={(e) => setReportData({ ...reportData, detalle: e.target.value })} className={styles.inputForm} />
          </div>
          <div>
            <label className={styles.labelForm}>Medio de transporte de la persona:</label>
            <input type='text' value={reportData.medioTransportePersona} onChange={(e) => setReportData({ ...reportData, medioTransportePersona: e.target.value })} className={styles.inputForm} />
          </div>
          <div>
            <label className={styles.labelForm}>Tipos de objetos sustraídos:</label>
            <input type='text' value={reportData.tiposObjetosSustraidos} onChange={(e) => setReportData({ ...reportData, tiposObjetosSustraidos: e.target.value })} className={styles.inputForm} />
          </div>

          {/* -----------------------Geolocalización-----------------------  */}
          <div className={styles.contentMap}>
            <label className={styles.labelForm}>Ubicación en el Mapa:</label>
            <Map selected={selectedLocation} setSelected={setSelectedLocation} locations={locations} setLocations={setLocations} />
          </div>
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <button type='button' onClick={handleReportSubmit}>
          Guardar Informe
        </button>
      </div>
    </form>
  )
}
