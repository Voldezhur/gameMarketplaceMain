const db = require("./postgresConfig");

exports.getAllUsers = (req, res) => {
    db.pool.query("SELECT * FROM users ORDER BY uid ASC", (err, result) => {
        if (err) {
            throw err;
        }

        res.status(200).json(result.rows);
    });
}

exports.getAllGames = (req, res) => {
    db.pool.query("SELECT * FROM games ORDER BY game_id ASC", (err, result) => {
        if (err) {
            throw err;
        }

        res.status(200).json(result.rows);
    });
}

exports.getUserById = (req, res) => {
    const id = parseInt(req.params.id)

    db.pool.query("SELECT * FROM users WHERE uid = $1", [id], (err, result) => {
        if (err) {
            throw err;
        }

        res.status(200).json(result.rows);
    });
}