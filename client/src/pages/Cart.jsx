import React, { useState } from 'react';

import MyButton from '../components/UI/button/MyButton';

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

    const purchaseGames = (event) => {
        event.preventDefault();
        alert("Заказ на сумму: " + total);
    }

    return (
        <div className="mainContent">
            <h1 className="cart__title">Корзина</h1>
            {games.map(game => (
                <div key={game.id} className="game">
                    <div className="game-details">
                        <div className="game-title">{game.title}</div>
                        <div className="game-price">{game.price}</div>
                    </div>
                    <MyButton onClick={() => removeGame(game.id)}>Удалить из корзины</MyButton>
                </div>
            ))}
            <div className="total">
                Итого: <span>{total.toFixed(2)}</span>
            </div>
            <div className="buy">
                <MyButton onClick={purchaseGames}>Перейти к оформлению заказа</MyButton>
            </div>
        </div>
    );
};

export default Cart;