import React from 'react';
import {useState} from 'react';
import {useMemo} from 'react';
import axios from 'axios';  // Для связи бека и фронта

import './styles/App.css';

import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';
import MyModal from './components/UI/MyModal/MyModal';
import MyButton from './components/UI/button/MyButton';

// Пробная функция для передачи информации бека на фронт
// data это информация с сервера
const apiCall = () => {
  axios.get('http://localhost:8000').then((data) => {
    console.log(data)  // Вывод фронтенд консоли
  })
}

const App = () => {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript', body: 'interesting'},
    {id: 2, title: 'Python', body: 'nonono'},
    {id: 3, title: 'C++', body: 'lol'}
  ])
  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);


  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
    }
    return posts;
  }, [filter.sort, posts])

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
  }, [filter.query, sortedPosts])


  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }


  return (
    <div className="App">
      <MyButton style={{marginTop: '30px'}} onClick={() => setModal(true)}>
        Создать пост
      </MyButton>
      <MyModal visible={modal} setVisible={setModal} >
        <PostForm create={createPost} />
      </MyModal>
      <hr style={{margin: '15px 0'}} />
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
      <PostList remove={removePost} posts={sortedAndSearchedPosts} title='Посты про JS' />
    </div>
  );
}

export default App;