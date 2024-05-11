import mysql from 'mysql2/promise'

const db = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: 'VilattaRomina',
  database: 'merobaron',
  port: '3306',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
})

db.getConnection((err, connection) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err)
    throw err
  } else {
    console.log('Conexión exitosa a la base de datos MySQL')
    connection.release() // Libera la conexión de inmediato
  }
})

export default db
