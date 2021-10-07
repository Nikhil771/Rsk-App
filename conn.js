const mysql = require("mysql");

const connection = mysql.createConnection({
    host: 'localhost',
    port:3306,
    user: 'root',
    password: '',
    database: 'mydb'
})

connection.connect((err)=>{
if(err) throw err;
console.log('mysql connected');
})

module.exports =connection;