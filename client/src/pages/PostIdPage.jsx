import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';

import '../styles/App.css';
import '../styles/PostIdPage.css';

import { useFetching } from '../hooks/useFetching';
import PostService from '../API/PostService';
import Loader from '../components/UI/Loader/Loader';

// Страница определенной игры из каталога
const PostIdPage = () => {
    const params = useParams(); // параметры из адресной строки
    const [post, setPost] = useState({}); // состояние объекта игры
    const [comments, setComments] = useState([]); // состояние массива комментариев к игре

    // метод для получения данных игры
    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(id);
        setPost(response.data);
    })

    //метод для получения комментариев к игре
    const [fetchComments, isCommentsLoading, commentsError] = useFetching(async (id) => {
        const respone = await PostService.getCommentsByPostId(id);
        setComments(respone.data);
    })

    // хук, активирующийся при загрузке страницы
    useEffect(() => {
        fetchPostById(params.id)
        fetchComments(params.id)
    }, [])

    return (
        <div className="mainContent">
            <h1>Вы открыли страницу игры с Id = {params.id}!</h1>

            {isLoading
                ? <Loader />
                : <div className="game">
                    {post.id}. {post.title}<br/>
                    {post.body}
                </div>
            }

            <h1>Комментарии</h1>

            {isCommentsLoading
                ? <Loader />
                : <div className="comments_list">
                    {comments.map(comm =>
                        <div className="comment" key={comm.id} style={{margin: '10px'}}>
                            <h5>{comm.email}</h5>
                            <div>{comm.body}</div>
                        </div>
                    )}
                </div>
            }
            
        </div>
    )
}

export default PostIdPage;