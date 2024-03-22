import React from "react";
import { useNavigate } from "react-router-dom";

import MyButton from "./UI/button/MyButton";

// Компонент поста
const PostItem = (props) => {
    const navigate = useNavigate();

    function transitToPost(id) {
        navigate(`/games/${id}`, {replace: false})
    }

    return (
        <div className="post">
            <div className="post__content">
                <strong>{props.post.id}. {props.post.title}</strong>
                <div>
                    {props.post.body}
                </div>
            </div>
            <div className="post__buttons">
                <MyButton onClick={() => transitToPost(props.post.id)}>
                    Открыть
                </MyButton>
            </div>
        </div>
    )
}

export default PostItem;