import React from "react";

import GameItem from './GameItem';

// Компонент списка постов
const GameList = ({games, title}) => {
    if (!games.length) {
        return (
            <h1 style={{textAlign: 'center'}}>
                Игры не найдены...
            </h1>
        )
    }

    return (
        <div className="gameList">
            <h1 style={{textAlign: 'center'}}>
                {title}
            </h1>
            <div className="gameList__list">
                {games.map((game) => 
                    <GameItem key={game.game_id} game={game} />
                )}
            </div>
        </div>
    )
}

export default GameList;