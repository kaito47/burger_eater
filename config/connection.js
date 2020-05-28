// Sets up MySQL connection
const mysql = require("mysql");
// Sets up secure password
require("dotenv").config();

const connection = mysql.createConnection({
    host: "s3lkt7lynu0uthj8.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "h4yhcel14myjligw",
    password: "e49ezlv6meuqfiz3",
    database: "a5hhg5rjtebx660u"
});

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
