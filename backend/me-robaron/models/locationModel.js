export default class Location {
  constructor (address, latitude, longitude) {
    this.address = address
    this.latitude = latitude
    this.longitude = longitude
  }


 save(db, callback) {
    const insertDireccionSql =
      'INSERT INTO direcciones (nombre, latitud, longitud) VALUES (?, ?, ?)';
    db.query(
      insertDireccionSql,
      [this.address, this.latitude, this.longitude],
      (err, result) => {
        if (err) {
          callback(err, null);
        } else {
          const insertCoordenadasSql =
            'INSERT INTO coordenadas (latitud, longitud, direccion_id) VALUES (?, ?, ?)';
          db.query(
            insertCoordenadasSql,
            [this.latitude, this.longitude, result.insertId],
            callback
          );
        }
      }
    );
  }

  static getAll(db, callback) {
    const selectAllSql = 'SELECT * FROM coordenadas';
    db.query(selectAllSql, (err, results) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, results);
      }
    });
  }
}
