import mysql from 'mysql2';

const dbConfig = {
  host: '127.0.0.1',
  user: 'root',
  password: 'VilattaRomina',
  database: 'merobaron',
  puerto: '3306',
};

const db = mysql.createConnection(dbConfig);

db.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
  } else {
    console.log('Conexión exitosa a la base de datos MySQL');
  }
});

export default db;
