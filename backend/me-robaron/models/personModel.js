export class Person {
  constructor (apellido, nombre, calle, numero, barrio, ciudad) {
    this.apellido = apellido
    this.nombre = nombre
    this.calle = calle
    this.numero = numero
    this.barrio = barrio
    this.ciudad = ciudad
  }

  async save (db) {
    const insertPersonSql = `
        INSERT INTO Persona (
          Apellido,
          Nombre,
          Calle,
          Numero,
          Barrio,
          Ciudad
        ) VALUES (?, ?, ?, ?, ?, ?)
      `
    try {
      const [result] = await db.query(insertPersonSql, [
        this.apellido,
        this.nombre,
        this.calle,
        this.numero,
        this.barrio,
        this.ciudad
      ])
      return { id: result.insertId }
    } catch (error) {
      throw new Error('Error al guardar los datos: ' + error.message)
    }
  }
}

export default Person
