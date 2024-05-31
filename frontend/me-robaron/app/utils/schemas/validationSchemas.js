import * as Yup from 'yup'

export const validationSchema = Yup.object().shape({
  reporter: Yup.object().shape({
    aceptoCondicion: Yup.boolean().required('Este campo es requerido'),
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
    calle: Yup.string().required('La calle es requerida'),
    numero: Yup.string()
      .matches(/^[0-9]+$/, 'El numero debe ser un numero')
      .required('El numero es requerido'),
    barrio: Yup.string().required('El barrio es requerido'),
    ciudad: Yup.string().required('La ciudad es requerida')
  }),
  report: Yup.object().shape({
    fecha: Yup.string()
      .matches(
        /^(0[1-9]|1[0-9]|2[0-9]|3[01])[-](0[1-9]|1[0-2])[-](19|20)\d\d$/,
        'Formato de fecha invalido'
      )
      .required('La fecha es requerida'),
    detalle: Yup.string()
      .min(10, 'El detalle debe tener al menos 10 caracteres')
      .max(500, 'El detalle debe tener menos de 900 caracteres')
      .required('El detalle es requerido')
  }),
  location: Yup.object().shape({
    direccion: Yup.string()
      .min(10, 'La dirección debe tener al menos 10 caracteres')
      .max(100, 'La dirección debe tener menos de 100 caracteres')
      .required('La dirección es requerida'),
    latitud: Yup.number()
      .min(-90, 'La latitud debe ser mayor a -90')
      .max(90, 'La latitud debe ser menor a 90')
      .required('La latitud es requerida'),
    longitud: Yup.number()
      .min(-180, 'La longitud debe ser mayor a -180')
      .max(180, 'La longitud debe ser menor a 180')
      .required('La longitud es requerida')
  }),
  peopleInvolved: Yup.object().shape({
    conozcoAlDenunciado: Yup.boolean().required('Este campo es requerido'),
    hayVictimas: Yup.boolean().required('Este campo es requerido'),
    hayTestigos: Yup.boolean().required('Este campo es requerido')
  }),
  reported: Yup.object().shape({
    apellido: Yup.string().required('El apellido es requerido'),
    nombre: Yup.string().required('El nombre es requerido'),
    calle: Yup.string().required('La calle es requerida'),
    numero: Yup.string().required('El numero es requerido'),
    barrio: Yup.string().required('El barrio es requerido'),
    ciudad: Yup.string().required('La ciudad es requerida'),
    vestimenta: Yup.string().required('La vestimenta es requerida'),
    apariencia: Yup.string().required('La apariencia es requerida')
  }),
  victim: Yup.object().shape({
    apellido: Yup.string().required('El apellido es requerido'),
    nombre: Yup.string().required('El nombre es requerido'),
    calle: Yup.string().required('La calle es requerida'),
    numero: Yup.string().required('El numero es requerido'),
    barrio: Yup.string().required('El barrio es requerido'),
    ciudad: Yup.string().required('La ciudad es requerida')
  }),
  witness: Yup.object().shape({
    apellido: Yup.string().required('El apellido es requerido'),
    nombre: Yup.string().required('El nombre es requerido'),
    calle: Yup.string().required('La calle es requerida'),
    numero: Yup.string().required('El numero es requerido'),
    barrio: Yup.string().required('El barrio es requerido'),
    ciudad: Yup.string().required('La ciudad es requerida')
  })
})
