import mysql from 'mysql2'

const db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'VilattaRomina',
  database: 'merobaron',
  port: '3306'
})

db.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err)
    throw err
  } else {
    console.log('Conexión exitosa a la base de datos MySQL')
  }
})

export default db
