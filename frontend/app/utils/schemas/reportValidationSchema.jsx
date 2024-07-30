import * as Yup from 'yup'

// Función para obtener la fecha actual en formato YYYY-MM-DD
const getCurrentDate = () => {
  const today = new Date()
  const yyyy = today.getFullYear()
  const mm = String(today.getMonth() + 1).padStart(2, '0') // Meses empiezan desde 0
  const dd = String(today.getDate()).padStart(2, '0')
  return `${yyyy}-${mm}-${dd}`
}

export const reportValidationSchema = Yup.object().shape({
  fecha: Yup.string()
    .required('La fecha es requerida')
    .test('fecha-posterior', 'La fecha no puede ser posterior a la fecha actual', function (value) {
      if (!value) return true // Si no hay valor, pasa la validación de 'required'
      const currentDate = getCurrentDate()
      return value <= currentDate
    }),
  detalle: Yup.string()
    .min(10, 'El detalle debe tener al menos 10 caracteres')
    .max(500, 'El detalle debe tener menos de 900 caracteres')
    .required('El detalle es requerido')
})
