import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import PostItem from './PostItem';

// Компонент списка постов
const PostList = ({posts, title}) => {
    if (!posts.length) {
        return (
            <h1 style={{textAlign: 'center'}}>
                Игры не найдены...
            </h1>
        )
    }

    return (
        <div className="postList">
            <h1 style={{textAlign: 'center'}}>
                {title}
            </h1>
            <TransitionGroup>
                {posts.map((post, index) => 
                    <CSSTransition
                        key={post.id}
                        timeout={500}
                        classNames="post"
                    >
                        <PostItem number={index + 1} post={post} />
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    )
}

export default PostList;