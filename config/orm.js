// Importing connection module
const connection = require('./connection.js');

// write update/delete functions (video 0:47, 1:22, 2:00)

// MAY USE THE FOLLOWING HELPER FUNCTION?????? From cats orm.js
// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
    var arr = [];
    for (var key in ob) {
        var value = ob[key];
        // check to skip hidden properties
        if (Object.hasOwnProperty.call(ob, key)) {
            // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
            // e.g. {sleepy: true} => ["sleepy=true"]
            arr.push(key + "=" + value);
        }
    }

    // translate array of strings to a single comma-separated string
    return arr.toString();
}
// Object for all our SQL statement functions.
let orm = {
    all: function (table, cb) {
        let queryString = "SELECT * FROM " + table + ";";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        })
    },
    create: function (vals, cb) {
        // add input string as burger_name value into burgers table
        let queryString = "INSERT INTO burgers (burger_name) VALUES ?";

        // let queryString = "INSERT INTO burgers (burger_name)";
        // queryString += "VALUES (";
        // queryString += "?";
        // queryString += ") ";
        console.log(queryString);
        connection.query(queryString, vals, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        })
    },
    update: function (condition, id, cb) {
        // Set 'devoured' condition to true based on id
        let queryString = "UPDATE burgers SET ? WHERE ? ";

        console.log(queryString);
        connection.query(queryString, condition, id, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        })
    }

}
// Export the orm object for the model (cat.js).
module.exports = orm;
