import React, { useState, useEffect } from 'react';
import axios from 'axios';

import '../styles/App.css';
import '../styles/Posts.css';

import PostList from '../components/PostList';
import PostFilter from '../components/PostFilter';
import { usePosts } from '../hooks/usePosts';
import PostService from '../API/PostService';
import Loader from '../components/UI/Loader/Loader';
import { useFetching } from '../hooks/useFetching';
import { getPageCount, getPagesArray } from '../utils/pages';
import Pagination from '../components/UI/pagination/Pagination';

// Страница каталога игр
const Posts = () => {
  const [posts, setPosts] = useState([]); // состояние списка игр в каталоге
  const [filter, setFilter] = useState({sort: '', query: ''}); // состояние сортировки и поискового запроса
  const [modal, setModal] = useState(false); // состояние модального окна
  const [totalPages, setTotalPages] = useState(0); // состояние количества страниц пагинации
  const [limit, setLimit] = useState(10); // состояние количества элеменов каталога на странице
  const [page, setPage] = useState(1); // состояние текущей страницы
  // состояние итогового списка постов после фильтра и сортировки
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  // метод получения игр в каталог
  const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
    const response = await PostService.getAll(limit, page);
    setPosts(response.data);
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getPageCount(totalCount, limit));
  })

  // хук, используется при первой загрузке страницы
  useEffect(() => {
    fetchPosts(limit, page);
  }, [])

  // метод создания нового поста
  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  }

  // метод удаления существующего поста
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  // метод изменяющий текущую страницу пагинации
  const changePage = (page) => {
    setPage(page);
    fetchPosts(limit, page);
  }

  return (
    <div className="mainContent">
      <h1 style={{textAlign: 'center'}}>Найдется все</h1>
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
      {postError && <h1>ошибка ${postError}</h1>}
      {isPostsLoading
        ? <div className="loader__block"><Loader /></div>
        : <PostList posts={sortedAndSearchedPosts} title='Каталог игр' />
      }
      <Pagination
        totalPages={totalPages}
        page={page}
        changePage={changePage}
      />
    </div>
  );
}

export default Posts;