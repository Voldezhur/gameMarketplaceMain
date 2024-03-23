import {useMemo} from 'react';

// Кастомный хук, возвращает новый массив постов по сортировке
export const useSortedGames = (games, sort) => {
  
    const sortedGames = useMemo(() => {
        if (!games.length) {
          return [];
        }
        else if (sort) {
          return [...games].sort((a, b) => a[sort].localeCompare(b[sort]))
        }
        return games;
      }, [games, sort])

    return sortedGames;
}

// Кастомный хук, возвращает новый массив постов по сортировке и фильтру
export const useGames = (games, sort, query) => {
    const sortedGames = useSortedGames(games, sort);

    const sortedAndSearchedGames = useMemo(() => {
        return sortedGames.filter(post => post.game_name.toLowerCase().includes(query.toLowerCase()))
      }, [query, sortedGames])

    return sortedAndSearchedGames;
}