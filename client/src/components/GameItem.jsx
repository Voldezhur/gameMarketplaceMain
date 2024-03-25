import React from "react";
import { useNavigate } from "react-router-dom";

import MyButton from "./UI/button/MyButton";

// Компонент поста
const GameItem = (props) => {
    const navigate = useNavigate();

    // функция навигации к игре
    function transitToGame(id) {
        navigate(`/games/${id}`, {replace: false})
    }

    // функция добавления товара в корзину
    function addOnCart() {

    }

    return (
        <div className="game">
            <div className="game__content">
                <div className="game__content__title">
                    {props.game.game_name}
                </div>
                <div className="game__content__details">
                    <div className="game__content__details__item">
                        Id продукта: {props.game.game_id}
                    </div>
                    <div className="game__content__details__item">
                        Id жанра: {props.game.genre_id}
                    </div>
                    <div className="game__content__details__item">
                        Id Производителя: {props.game.developer_id}
                    </div>
                    <div className="game__content__details__item">
                        Цена: {props.game.game_price}
                    </div>
                    <div className="game__content__details__item">
                        Рейтинг: {props.game.game_raiting}
                    </div>
                    <div className="game__content__details__item">
                        Количество отзывов: {props.game.review_number}
                    </div>
                    <div className="game__content__details__item">
                        Дата выхода: {props.game.release_date.substring(0, 10)}
                    </div>
                </div>
            </div>
            <div className="game__buttons">
                <MyButton onClick={() => transitToGame(props.game.game_id)}>
                    Открыть страницу игры
                </MyButton>
                <MyButton onClick={addOnCart}>
                    Добавить в корзину
                </MyButton>
            </div>
        </div>
    )
}

export default GameItem;