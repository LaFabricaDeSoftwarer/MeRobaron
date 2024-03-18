import React from 'react'
import {
  Grid,
  TextField,
  FormControlLabel,
  Checkbox,
  InputLabel,
  Select,
  MenuItem
} from '@mui/material'

const Reporter = (props) => {
  const { formik } = props

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
          name='email'
          label='Email'
          variant='outlined'
          fullWidth
          size='small'
          onChange={formik.handleChange}
          value={formik.values.email}
        />
      </Grid>
      <Grid item xs={12}>
        <FormControlLabel
          required
          control={<Checkbox />}
          label='Acepto condición'
          name='aceptoCondicion'
          onChange={formik.handleChange}
          checked={formik.values.aceptoCondicion}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          name='apellido'
          label='Apellido'
          variant='outlined'
          size='small'
          fullWidth
          onChange={formik.handleChange}
          value={formik.values.apellido}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          name='nombre'
          label='Nombre'
          variant='outlined'
          size='small'
          fullWidth
          onChange={formik.handleChange}
          value={formik.values.nombre}
        />
      </Grid>
      <Grid item xs={6}>
        <InputLabel id='tipoDocumento-label'>Tipo de Documento</InputLabel>
        <Select
          name='tipoDocumento'
          labelId='tipoDocumento-label'
          id='tipoDocumento'
          value={formik.values.tipoDocumento || ''}
          onChange={formik.handleChange}
          fullWidth
        >
          <MenuItem value={10}>DNI</MenuItem>
          <MenuItem value={20}>LC</MenuItem>
          <MenuItem value={30}>LE</MenuItem>
        </Select>
      </Grid>
      <Grid item xs={12}>
        <TextField
          name='nroDocumento'
          label='Numero de documento'
          variant='outlined'
          size='small'
          fullWidth
          onChange={formik.handleChange}
          value={formik.values.nroDocumento}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          name='edad'
          label='Edad'
          variant='outlined'
          size='small'
          fullWidth
          onChange={formik.handleChange}
          value={formik.values.edad}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          name='telefono'
          label='Telefono'
          variant='outlined'
          size='small'
          fullWidth
          onChange={formik.handleChange}
          value={formik.values.telefono}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          name='calle'
          label='Calle'
          variant='outlined'
          size='small'
          fullWidth
          onChange={formik.handleChange}
          value={formik.values.calle}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          name='numero'
          label='Numero'
          variant='outlined'
          size='small'
          fullWidth
          onChange={formik.handleChange}
          value={formik.values.numero}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          name='barrio'
          label='Barrio'
          variant='outlined'
          size='small'
          fullWidth
          onChange={formik.handleChange}
          value={formik.values.barrio}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          name='ciudad'
          label='Ciudad'
          variant='outlined'
          size='small'
          fullWidth
          onChange={formik.handleChange}
          value={formik.values.ciudad}
        />
      </Grid>
    </Grid>
  )
}

export default Reporter

// import React from 'react'
// import { Formik, Form, Field } from 'formik'
// import { TextField, Button } from '@material-ui/core'
// import { CheckboxWithLabel } from 'formik-material-ui'

// const Reporter = () => {
//   return (
//     <Formik
//       initialValues={{
//         email: '',
//         aceptoCondicion: false,
//         apellido: '',
//         nombre: '',
//         tipoDocumento: '',
//         nroDocumento: '',
//         edad: '',
//         telefono: '',
//         calle: '',
//         numero: '',
//         barrio: '',
//         ciudad: ''
//       }}
//       onSubmit={(values) => {
//         console.log(values) // Aquí puedes hacer algo con los datos, como enviarlos al componente principal
//       }}
//     >
//       <Form>
//         <Field name='email' component={TextField} label='Email' variant='outlined' fullWidth margin='normal' />
//         <Field
//           name='aceptoCondicion' type='checkbox' component={CheckboxWithLabel}
//           Label={{ label: 'Acepto condición' }} variant='outlined' fullWidth margin='normal'
//         />
//         <Field name='apellido' component={TextField} label='Apellido' variant='outlined' fullWidth margin='normal' />
//         <Field name='nombre' component={TextField} label='Nombre' variant='outlined' fullWidth margin='normal' />
//         <Field name='tipoDocumento' component={TextField} label='Tipo de documento' variant='outlined' fullWidth margin='normal' />
//         <Field name='nroDocumento' component={TextField} label='Número de documento' variant='outlined' fullWidth margin='normal' />
//         <Field name='edad' component={TextField} label='Edad' variant='outlined' fullWidth margin='normal' />
//         <Field name='telefono' component={TextField} label='Teléfono' variant='outlined' fullWidth margin='normal' />
//         <Field name='calle' component={TextField} label='Calle' variant='outlined' fullWidth margin='normal' />
//         <Field name='numero' component={TextField} label='Número' variant='outlined' fullWidth margin='normal' />
//         <Field name='barrio' component={TextField} label='Barrio' variant='outlined' fullWidth margin='normal' />
//         <Field name='ciudad' component={TextField} label='Ciudad' variant='outlined' fullWidth margin='normal' />
//         <Button type='submit' variant='contained' color='primary'>
//           Guardar
//         </Button>
//       </Form>
//     </Formik>
//   )
// }

// export default Reporter
