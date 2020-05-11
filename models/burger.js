// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");


// Callback function for burger variable
var burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  // Insert function
  insertOne: function(addon, cb) {
    orm.insertOne("burgers", "burger_name", addon, function(res) {
      cb(res);
    });
  },
  // Update function
  updateOne: function(colVal, id, cb) {
    orm.updateOne(colVal, id, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (burgerController.js).
module.exports = burger;
