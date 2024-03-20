const Pool = require("pg").Pool;

const pool = new Pool({
    user: "paygame",
    host: "localhost",
    database: "gamesDatabaseTest",
    password: "291199",
});

module.exports = {
    pool
};