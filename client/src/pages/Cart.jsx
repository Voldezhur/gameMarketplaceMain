import React, { useState } from 'react';

// Страница корзины пользователя
const Cart = () => {
    // Состояние для хранения списка игр в корзине
    const [games, setGames] = useState([
        { id: 1, title: 'Игра 1', price: 19.99 },
        { id: 2, title: 'Игра 2', price: 29.99 }
    ]);

    // Функция для удаления игры из корзины
    const removeGame = (id) => {
        setGames(games.filter(game => game.id !== id));
    };

    // Вычисление общей стоимости игр
    const total = games.reduce((acc, game) => acc + game.price, 0);

    return (
        <div className="mainContent">
            <h1>Корзина с играми</h1>
            {games.map(game => (
                <div key={game.id} className="game">
                    <div className="game-details">
                        <div className="game-title">{game.title}</div>
                        <div className="game-price">{game.price}</div>
                    </div>
                    <button onClick={() => removeGame(game.id)}>Удалить</button>
                </div>
            ))}
            <div className="total">
                Итого: <span>{total.toFixed(2)}</span>
            </div>
        </div>
    );
};

export default Cart;