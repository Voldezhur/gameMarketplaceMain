import React from 'react';
import axios from 'axios';

import '../styles/App.css';
import '../styles/Error.css';

const getGames = () => {
    axios.get('https://localhost:8000').then((data) => {
        console.log(data)
    })
    .catch(function(error) {
        console.log(error)
    })
}

// Страница уведомления об ошибке
const GameTest = () => {
    return (
        <div className="mainContent">
            <h1 className="errorMessage">
                <button onClick={getGames}>Получить игры</button>
            </h1>
        </div>
    )
}

export default GameTest;