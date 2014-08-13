var mysql = require('mysql');

var pool = module.exports = mysql.createPool({  
    /*host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASS,
    database: process.env.MYSQL_DB,*/
    host: 'cgtec',    
    user: 'mastropaoloj',
    password: 'LaInsoportableLevedadDelSer',
    database: 'bandeja',
    connectionLimit: 400,
    multipleStatements: true,
    supportBigNumbers: true
});
