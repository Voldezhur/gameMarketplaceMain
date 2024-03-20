import {useMemo} from 'react';

// Кастомный хук, возвращает новый массив постов по сортировке
export const useSortedPosts = (posts, sort) => {
  
    const sortedPosts = useMemo(() => {
        if (sort) {
          return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
        }
        return posts;
      }, [sort, posts])

    return sortedPosts;
}

// Кастомный хук, возвращает новый массив постов по сортировке и фильтру
export const usePosts = (posts, sort, query) => {
    const sortedPosts = useSortedPosts(posts, sort);

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()))
      }, [query, sortedPosts])

    return sortedAndSearchedPosts;
}