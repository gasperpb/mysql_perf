const mysql = require('mysql')
const connection = mysql.createConnection({
    host: "127.0.0.1",
    user: 'root',
    password: '',
    database: 'crud'


})
connection.connect(() => {
    console.log('connected')

    connection.query('select * from clientes', (err, results) => {
        console.log(results);
    })
})