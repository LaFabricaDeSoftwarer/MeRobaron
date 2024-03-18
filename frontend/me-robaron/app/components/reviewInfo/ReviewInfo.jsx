import {
  Typography,
  List,
  ListItem,
  ListItemText
} from '@mui/material'
import Map from '../geolocation/Map'

const ReviewInfo = ({ formik, locations }) => {
  const { values } = formik
  return (
    <>
      <Typography variant='overline'>
        Denunciante
      </Typography>
      <List>
        <ListItem>
          <ListItemText
            primary='Email'
            secondary={values.email}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary='Accepto Condicion'
            secondary={values.aceptoCondicion ? 'Yes' : 'No'}
          />
        </ListItem>

        <ListItem>
          <ListItemText
            primary='Apellido'
            secondary={values.apellido}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary='Nombre'
            secondary={values.nombre}
          />
        </ListItem>

        <ListItem>
          <ListItemText
            primary='Tipo Documento'
            secondary={values.tipoDocumento}
          />
        </ListItem>

        <ListItem>
          <ListItemText
            primary='Nro Documento'
            secondary={values.nroDocumento}
          />
        </ListItem>

        <ListItem>
          <ListItemText
            primary='Edad'
            secondary={values.edad}
          />
        </ListItem>

        <ListItem>
          <ListItemText
            primary='Telefono'
            secondary={values.telefono}
          />
        </ListItem>

        <ListItem>
          <ListItemText
            primary='Calle'
            secondary={values.calle}
          />
        </ListItem>

        <ListItem>
          <ListItemText
            primary='Numero'
            secondary={values.numero}
          />
        </ListItem>

        <ListItem>
          <ListItemText
            primary='Barrio'
            secondary={values.barrio}
          />
        </ListItem>

        <ListItem>
          <ListItemText
            primary='Ciudad'
            secondary={values.ciudad}
          />
        </ListItem>

      </List>
      <Typography variant='overline'>
        Denunciado
      </Typography>
      <List>
        <ListItem>
          <ListItemText
            primary='Vestimenta'
            secondary={values.vestimenta}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary='Apariencia'
            secondary={values.apariencia}
          />
        </ListItem>
      </List>
      <Typography variant='overline'>
        Detalle del Robo
      </Typography>
      <List>
        <ListItem>
          <ListItemText
            primary='Fecha'
            secondary={values.fecha}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary='Detalle'
            secondary={values.detalle}
          />
        </ListItem>

        <ListItem>
          <Map locations={locations} />
        </ListItem>
      </List>
    </>
  )
}

export default ReviewInfo
