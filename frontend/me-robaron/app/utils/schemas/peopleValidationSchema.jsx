import * as Yup from 'yup'

export const peopleValidationSchema = Yup.object().shape({
  reported: Yup.object().shape({
    apellido: Yup.string().min(2, 'El apellido debe tener al menos 2 caracteres').max(50, 'El apellido debe tener menos de 50 caracteres').required('El apellido es requerido'),
    nombre: Yup.string().min(2, 'El nombre debe tener al menos 2 caracteres').max(50, 'El nombre debe tener menos de 50 caracteres').required('El nombre es requerido'),
    tipoDocumento: Yup.string().required('El tipo de documento es requerido'),
    nroDocumento: Yup.string().matches(/^[0-9]+$/, 'El numero de documento debe ser un numero').required('El numero de documento es requerido'),
    vestimenta: Yup.string().required('La vestimenta es requerida'),
    apariencia: Yup.string().required('La apariencia es requerida')
  }),
  victim: Yup.object().shape({
    apellido: Yup.string().min(2, 'El apellido debe tener al menos 2 caracteres').max(50, 'El apellido debe tener menos de 50 caracteres').required('El apellido es requerido'),
    nombre: Yup.string().min(2, 'El nombre debe tener al menos 2 caracteres').max(50, 'El nombre debe tener menos de 50 caracteres').required('El nombre es requerido'),
    tipoDocumento: Yup.string().required('El tipo de documento es requerido'),
    nroDocumento: Yup.string().matches(/^[0-9]+$/, 'El numero de documento debe ser un numero').required('El numero de documento es requerido')
  }),
  witness: Yup.object().shape({
    apellido: Yup.string().min(2, 'El apellido debe tener al menos 2 caracteres').max(50, 'El apellido debe tener menos de 50 caracteres').required('El apellido es requerido'),
    nombre: Yup.string().min(2, 'El nombre debe tener al menos 2 caracteres').max(50, 'El nombre debe tener menos de 50 caracteres').required('El nombre es requerido'),
    tipoDocumento: Yup.string().required('El tipo de documento es requerido'),
    nroDocumento: Yup.string().matches(/^[0-9]+$/, 'El numero de documento debe ser un numero').required('El numero de documento es requerido')
  })
})

export default peopleValidationSchema
