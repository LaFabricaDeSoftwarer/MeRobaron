import mysql from 'mysql2'

const dbConfig = {
  host: '127.0.0.1',
  user: 'root',
  password: 'VilattaRomina',
  database: 'merobaron',
  port: '3306'
}

const pool = mysql.createPool(dbConfig)
const db = pool.promise()

export default db
