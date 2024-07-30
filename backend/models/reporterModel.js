export class Reporter {
  // El constructor de la clase DEnunciado define y inicializa las propiedades de un objeto Reporter.
  // Los parámetros del constructor corresponden a los campos necesarios para crear un nuevo Denunciado.
  constructor (
    email,
    aceptaCondicion,
    apellido,
    nombre,
    tipoDocumento,
    nroDocumento,
    edad,
    telefono,
    calle,
    numero,
    barrio,
    localidad

  ) {
    this.email = email
    this.aceptaCondicion = aceptaCondicion
    this.apellido = apellido
    this.nombre = nombre
    this.tipoDocumento = tipoDocumento
    this.nroDocumento = nroDocumento
    this.edad = edad
    this.telefono = telefono
    this.calle = calle
    this.numero = numero
    this.barrio = barrio
    this.localidad = localidad
  }

  // El método save es una función asíncrona que guarda los datos del objeto Reporter en la base de datos
  async save (connectionPool) {
    const insertReporterSql = `
      INSERT INTO Denunciante (
        Email,
        AceptaCondicion,
        Apellido,
        Nombre,
        TipoDocumento,
        NroDocumento,
        Edad,
        Telefono,
        Calle,
        Numero,
        Barrio,
        Localidad      
      ) VALUES (?,?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
    try {
      // Esta línea ejecuta la consulta SQL usando connectionPool.query.
      // Los valores de las propiedades del objeto Reporter se pasan como un array para reemplazar los signos de interrogación ? en la consulta SQL.
      const [result] = await connectionPool.query(insertReporterSql, [
        this.email,
        this.aceptaCondicion,
        this.apellido,
        this.nombre,
        this.tipoDocumento,
        this.nroDocumento,
        this.edad,
        this.telefono,
        this.calle,
        this.numero,
        this.barrio,
        this.localidad
      ])
      // Si la consulta se ejecuta con éxito, se devuelve un objeto que contiene el insertId, que es el ID del nuevo registro insertado.
      return { id: result.insertId }
    } catch (error) {
      throw new Error('Error al guardar los datos: ' + error.message)
    }
  }
}
export default Reporter
