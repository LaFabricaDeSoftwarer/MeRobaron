import {
  Grid,
  FormControlLabel,
  Checkbox,
  Button
} from '@mui/material'
import PersonForm from '../personForm/personForm'

const Reported = (props) => {
  const { formik, showDenunciadoForm, setShowDenunciadoForm } = props

  return (

    <Grid container spacing={2}>
      <Grid item xs={12}>
        <FormControlLabel
          required
          control={<Checkbox />}
          label='Conozco al denunciado'
          name='conozcoAlDenunciado'
          onChange={(e) => {
            formik.handleChange(e)
            setShowDenunciadoForm(e.target.checked)
          }}
          checked={formik.values.conozcoAlDenunciado}
        />
      </Grid>
      {showDenunciadoForm && (
        <>
          {/* Formulario del denunciado */}
          <PersonForm />
        </>
      )}
      {showDenunciadoForm && (
        <Grid item xs={12}>
          <Button onClick={() => console.log('Agregar denunciado')}>Agregar Denunciado</Button>
        </Grid>
      )}
    </Grid>
  )
}

export default Reported

// {/* <Grid
// container
// spacing={2}
// >
// <Grid item xs={12}>
//   <FormControlLabel
//     required
//     control={<Checkbox />}
//     label='Conozco al denunciado'
//     name='conozcoAlDenunciado'
//     onChange={formik.handleChange}
//     checked={formik.values.aceptoCondicion}
//   />
// </Grid>
// {/* <Grid item xs={12}>
//   <TextField
//     name='apellido'
//     label='Apellido'
//     variant='outlined'
//     size='small'
//     fullWidth
//   />
// </Grid>
// <Grid item xs={12}>
//   <TextField
//     name='nombre'
//     label='Nombre'
//     variant='outlined'
//     size='small'
//     fullWidth

//   />
// </Grid>
// <Grid item xs={12}>
//   <TextField
//     name='calle'
//     label='Calle'
//     variant='outlined'
//     size='small'
//     fullWidth

//   />
// </Grid>
// <Grid item xs={12}>
//   <TextField
//     name='numero'
//     label='Numero'
//     variant='outlined'
//     size='small'
//     fullWidth

//   />
// </Grid>
// <Grid item xs={12}>
//   <TextField
//     name='barrio'
//     label='Barrio'
//     variant='outlined'
//     size='small'
//     fullWidth
//   />
// </Grid>
// <Grid item xs={12}>
//   <TextField
//     name='ciudad'
//     label='Ciudad'
//     variant='outlined'
//     size='small'
//     fullWidth
//   />
// </Grid>
// <Grid
//   item
//   xs={6}
// >
//   <TextField
//     name='vestimenta'
//     label='Vestimenta'
//     variant='outlined'
//     size='small'
//     fullWidth
//     value={formik.values.vestimenta}
//     onChange={formik.handleChange}
//     // error={formik.touched.firstName && Boolean(formik.errors.firstName)}
//     helperText={formik.touched.firstName && formik.errors.vestimenta}
//   />
// </Grid>
// <Grid
//   item
//   xs={6}
// >
//   <TextField
//     name='apariencia'
//     label='Apariencia'
//     variant='outlined'
//     size='small'
//     fullWidth
//     value={formik.values.apariencia}
//     onChange={formik.handleChange}
//     error={formik.touched.lastName && Boolean(formik.errors.apariencia)}
//     helperText={formik.touched.lastName && formik.errors.apariencia}
//   />
// </Grid> */}

// </Grid> */}
