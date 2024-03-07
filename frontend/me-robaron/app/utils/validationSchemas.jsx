import * as yup from 'yup'

export const personSchema = yup.object().shape({
  apellido: yup.string().required('El apellido es requerido'),
  nombre: yup.string().required('El nombre es requerido'),
  tipoDocumento: yup.string().required('El tipo de documento es requerido'),
  nroDocumento: yup.string().required('El número de documento es requerido'),
  edad: yup.number().positive('La edad debe ser un número positivo').required('La edad es requerida'),
  telefono: yup.string().required('El teléfono es requerido'),
  calle: yup.string().required('La calle es requerida'),
  numero: yup.number().positive('El número de calle debe ser un número positivo').required('El número es requerido'),
  barrio: yup.string().required('El barrio es requerido'),
  ciudad: yup.string().required('La ciudad es requerida'),
  email: yup.string().email('Debe ser un correo electrónico válido').required('El correo electrónico es requerido'),
  aceptCondition: yup.boolean().oneOf([true], 'Debe aceptar las condiciones')
})

export const reportSchema = yup.object().shape({
  date: yup.date().required('La fecha es requerida'),
  detail: yup.string().required('El detalle es requerido'),
  clothing: yup.string().required('La vestimenta es requerida'),
  appearance: yup.string().required('La apariencia es requerida')
})

export const validationSchema = yup.object().concat(personSchema).concat(reportSchema)
