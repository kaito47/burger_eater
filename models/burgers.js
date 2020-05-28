// Import ORM to create functions that will interact with the database (video 1:59)
const orm = require('../config/orm.js');

let burger = {
    all: function (cb) {
        orm.all("burgers", function (res) {
            cb(res);
        });
    },
    // The variables cols and vals are arrays.
    create: function (vals, cb) {
        orm.create(vals, function (res) {
            cb(res);
        });
    },
    update: function (id, cb) {
        orm.update(id, function (res) {
            cb(res);
        });
    },
}

// Export the database functions for the controller (burgers_controller.js).
module.exports = burger;
