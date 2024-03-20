import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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

// получение пользователя по id
function getUserByUid(id) {
    axios.get(`http://localhost:8000/user/${id}`)
        .then((response) => {
            console.log(response.data)  // Вывод фронтенд консоли
    })
        .catch(function(error) {
            console.log(error)
    })
}

function getUser() {
    getUserByUid(1)
}

// Пробный вывод информации с бд в консоль
const GameTest = () => {
    return (
        <div className="mainContent">
            <h1>
                Тестирование апи
            </h1>
            <h1>
                <button onClick={getGames}>Получить игры</button>
                <button onClick={getUser}>Получить пользователя с uid 1</button>
            </h1>
        </div>
    )
}

export default GameTest;