// Sets up MySQL connection
const mysql = require("mysql");
let connection;
// Sets up secure password
require("dotenv").config();

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    const connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: process.env.DB_PASSWORD,
        database: "burgers_db"
    });
};
// Makes connection to MySQL
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Exports connection to import into ORM 
module.exports = connection;
