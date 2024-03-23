import React from "react";
import { useNavigate } from "react-router-dom";

import MyButton from "./UI/button/MyButton";

// Компонент поста
const GameItem = (props) => {
    const navigate = useNavigate();

    function transitToPost(id) {
        navigate(`/games/${id}`, {replace: false})
    }

    return (
        <div className="post">
            <div className="post__content">
                <strong>{props.post.game_id}. {props.post.game_name}</strong>
                <div>
                    {props.post.developer_id}<br/>
                    {props.post.game_price}<br/>
                    {props.post.game_raiting}<br/>
                    {props.post.review_number}<br/>
                    {props.post.genre_id}<br/>
                    {props.post.release_date}
                </div>
            </div>
            <div className="post__buttons">
                <MyButton onClick={() => transitToPost(props.post.game_id)}>
                    Открыть
                </MyButton>
            </div>
        </div>
    )
}

export default GameItem;