exports.getAllGames = async (req, res) => {
    try {
        const  r = await req.db.pool.query("SELECT * FROM games ORDER BY game_id ASC")
        res.status(200).json({err: '', games: r.rows });
    } catch(e) {
        res.status(200).json({err: e.message, games: []});
    }
}
