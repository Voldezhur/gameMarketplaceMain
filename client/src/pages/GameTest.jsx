import React from 'react';
import axios from 'axios';

import '../styles/App.css';
import '../styles/Error.css';

// response это ответ с сервера
const getGames = () => {
    axios.get('http://localhost:8000/gamesList').then((response) => {
      console.log(response.data)  // Вывод фронтенд консоли
    })
    .catch(function(error) {
        console.log(error)
    })
}

// Пробный вывод информации с бд в консоль
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