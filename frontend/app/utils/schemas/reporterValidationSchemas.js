import * as Yup from 'yup'

export const reporterValidationSchema = Yup.object().shape({
  aceptaCondicion: Yup.boolean().oneOf([true], 'Debes aceptar las condiciones').required('Este campo es requerido'),
  email: Yup.string().email('Formato de email invalido').required('El email es requerido'),
  apellido: Yup.string().required('El apellido es requerido'),
  nombre: Yup.string()
    .min(2, 'El nombre debe tener al menos 2 caracteres')
    .max(50, 'El nombre debe tener menos de 50 caracteres')
    .required('El nombre es requerido'),
  tipoDocumento: Yup.string()
    .required('El tipo de documento es requerido'),
  nroDocumento: Yup.string()
    .matches(/^[0-9]+$/, 'El numero de documento debe ser un numero')
    .required('El numero de documento es requerido'),
  edad: Yup.number()
    .required('La edad es requerida'),
  telefono: Yup.string()
    .matches(/^[0-9]+$/, 'El telefono debe ser un numero')
    .required('El telefono es requerido'),
  calle: Yup.string().required('La calle es requerida'),
  numero: Yup.string()
    .matches(/^[0-9]+$/, 'El numero debe ser un numero')
    .required('El numero es requerido'),
  barrio: Yup.string().required('El barrio es requerido'),
  localidad: Yup.string().required('Localidad requerida')

})
