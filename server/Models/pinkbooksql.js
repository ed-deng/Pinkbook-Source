const { Pool } = require("pg");
//connection uri
const PG_URI =
  "postgres://dsztlzvw:3P5bwAfvoIFDgpcjBA6r_QG8QV7Vtz79@ziggy.db.elephantsql.com:5432/dsztlzvw";

// create a new pool here using the connection string above
const pool = new Pool({
  connectionString: PG_URI,
});

// Adding some notes about the database here will be helpful for future you or other developers.
// Schema for the database can be found below:
// https://github.com/CodesmithLLC/unit-10SB-databases/blob/master/docs/images/schema.png?raw=true

// We export an object that contains a property called query,
// which is a function that returns the invocation of pool.query() after logging the query
// This will be required in the controllers to be the access point to the database
module.exports = {
  query: (text, params, callback) => {
    console.log("executed query", text);
    return pool.query(text, params, callback);
  },
};

//Command to run in terminal to create sql tables to elephant sql
// psql command:
// psql -d postgres://dsztlzvw:3P5bwAfvoIFDgpcjBA6r_QG8QV7Vtz79@ziggy.db.elephantsql.com:5432/dsztlzvw -f tables.sql

// INSERT INTO SKILLS VALUES (1, 14, 'testSkills', 4)

// INSERT INTO NOTES VALUES (1, 14, 'this is a textbox', '2020-01-17', 2, '2020-01-17', 'Joe, Ed')

// INSERT INTO REMINDERS VALUES (1, 14, 'testSkills', '2020-01-17', '12:23' )
