const sql = require('mssql')

//'mssql://User:Password@ComputerName/\Instance/DatabaseName'
//Following example:
const config = 'mssql://sa:LOperas93786@silema.hiterp.com/company';

const poolPromise = new sql.ConnectionPool(config)
  .connect()
  .then(pool => {
    console.log('Connected to SQLServer...');
    return pool;
  })
  .catch(err => console.log('Database Connection Failed! Bad Config: ', err));

module.exports = {
  sql, poolPromise
};