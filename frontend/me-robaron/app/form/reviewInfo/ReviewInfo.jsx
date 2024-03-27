import { Typography, List, ListItem, ListItemText } from '@mui/material'

const ReviewInfo = ({ formik }) => {
  const { values } = formik
  return (
    <>
      <Typography variant='overline'>Denunciante</Typography>
      <List>
        <ListItem>
          <ListItemText primary='Email' secondary={values.reporter.email} />
        </ListItem>
        <ListItem>
          <ListItemText
            primary='Accepto Condicion'
            secondary={values.reporter.aceptoCondicion ? 'Si' : 'No'}
          />
        </ListItem>

        <ListItem>
          <ListItemText primary='Apellido' secondary={values.reporter.apellido} />
        </ListItem>
        <ListItem>
          <ListItemText primary='Nombre' secondary={values.reporter.nombre} />
        </ListItem>

        <ListItem>
          <ListItemText
            primary='Tipo Documento'
            secondary={values.reporter.tipoDocumento}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary='Nro Documento'
            secondary={values.reporter.nroDocumento}
          />
        </ListItem>

        <ListItem>
          <ListItemText primary='Edad' secondary={values.reporter.edad} />
        </ListItem>

        <ListItem>
          <ListItemText primary='Telefono' secondary={values.reporter.telefono} />
        </ListItem>

        <ListItem>
          <ListItemText primary='Calle' secondary={values.reporter.calle} />
        </ListItem>

        <ListItem>
          <ListItemText primary='Numero' secondary={values.reporter.numero} />
        </ListItem>

        <ListItem>
          <ListItemText primary='Barrio' secondary={values.reporter.barrio} />
        </ListItem>

        <ListItem>
          <ListItemText primary='Ciudad' secondary={values.reporter.ciudad} />
        </ListItem>
      </List>
      {values.reported.apellido && values.reported.nombre && (
        <>
          <Typography variant='overline'>Denunciado</Typography>
          <List>
            <ListItem>
              <ListItemText primary='Apellido' secondary={values.reported.apellido} />
            </ListItem>
            <ListItem>
              <ListItemText primary='Nombre' secondary={values.reported.nombre} />
            </ListItem>

            <ListItem>
              <ListItemText primary='Vestimenta' secondary={values.reported.vestimenta} />
            </ListItem>
            <ListItem>
              <ListItemText primary='Apariencia' secondary={values.reported.apariencia} />
            </ListItem>
          </List>
        </>
      )}
      {values.victim.apellido && values.victim.nombre && (
        <>
          <Typography variant='overline'>Victima</Typography>
          <List>
            <ListItem>
              <ListItemText primary='Apellido' secondary={values.victim.apellido} />
            </ListItem>
            <ListItem>
              <ListItemText primary='Nombre' secondary={values.victim.nombre} />
            </ListItem>

            <ListItem>
              <ListItemText primary='Vestimenta' secondary={values.victim.vestimenta} />
            </ListItem>
            <ListItem>
              <ListItemText primary='Apariencia' secondary={values.victim.apariencia} />
            </ListItem>
          </List>
        </>
      )}
      {values.reported.apellido && values.reported.nombre && (
        <>
          <Typography variant='overline'>Testigo</Typography>
          <List>
            <ListItem>
              <ListItemText primary='Apellido' secondary={values.witness.apellido} />
            </ListItem>
            <ListItem>
              <ListItemText primary='Nombre' secondary={values.witness.nombre} />
            </ListItem>

            <ListItem>
              <ListItemText primary='Vestimenta' secondary={values.witness.vestimenta} />
            </ListItem>
            <ListItem>
              <ListItemText primary='Apariencia' secondary={values.witness.apariencia} />
            </ListItem>
          </List>
          <Typography variant='overline'>Detalle del Robo</Typography>
          <List>
            <ListItem>
              <ListItemText primary='Fecha' secondary={values.report.fecha} />
            </ListItem>
            <ListItem>
              <ListItemText primary='Detalle' secondary={values.report.detalle} />
            </ListItem>
            <ListItem>
              <ListItemText primary='Direccion' secondary={values.location.direccion} />
            </ListItem>
          </List>
        </>
      )}
    </>
  )
}
export default ReviewInfo
