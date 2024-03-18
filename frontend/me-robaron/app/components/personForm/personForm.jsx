import React from 'react'
import {
  Grid,
  TextField
} from '@mui/material'

const PersonForm = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
          name='apellido'
          label='Apellido'
          variant='outlined'
          size='small'
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          name='nombre'
          label='Nombre'
          variant='outlined'
          size='small'
          fullWidth

        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          name='calle'
          label='Calle'
          variant='outlined'
          size='small'
          fullWidth

        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          name='numero'
          label='Numero'
          variant='outlined'
          size='small'
          fullWidth

        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          name='barrio'
          label='Barrio'
          variant='outlined'
          size='small'
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          name='ciudad'
          label='Ciudad'
          variant='outlined'
          size='small'
          fullWidth
        />
      </Grid>
    </Grid>
  )
}

export default PersonForm
