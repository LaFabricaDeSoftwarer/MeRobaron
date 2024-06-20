import * as Yup from 'yup'

export const reportValidationSchema = Yup.object().shape({
  fecha: Yup.date().required('La fecha es requerida'),
  detalle: Yup.string().min(10, 'El detalle debe tener al menos 10 caracteres').required('El detalle es requerido'),
  conozcoAlDenunciado: Yup.boolean().required('Debe seleccionar una opción'),
  hayVictimas: Yup.boolean().required('Debe seleccionar una opción'),
  hayTestigos: Yup.boolean().required('Debe seleccionar una opción')
})
