import React, { useState, useEffect } from 'react';

import '../styles/App.css';
import '../styles/Catalog.css';

import GameList from '../components/GameList';
import GameFilter from '../components/GameFilter';
import { useGames } from '../hooks/useGames';
import GameService from '../API/GameService';
import Loader from '../components/UI/Loader/Loader';
import { useFetching } from '../hooks/useFetching';

// Страница каталога игр
const Catalog = () => {
  const [games, setGames] = useState([]); // состояние списка игр в каталоге

  const [filter, setFilter] = useState({sort: '', query: ''}); // состояние сортировки и поискового запроса

  // состояние итогового списка постов после фильтра и сортировки
  const sortedAndSearchedGames = useGames(games, filter.sort, filter.query);

  // метод получения игр в каталог
  const [fetchGames, isGamesLoading, gameError] = useFetching(async () => {
    const response = await GameService.getAll();
    setGames(response.data);
  })

  // хук, используется при первой загрузке страницы
  useEffect(() => {
    fetchGames();
  }, [])

  return (
    <div className="mainContent">
      <h1 style={{textAlign: 'center'}}>Поиск игр</h1>
      <GameFilter
        filter={filter}
        setFilter={setFilter}
      />
      {gameError && <h1>ошибка ${gameError}</h1>}
      {isGamesLoading
        ? <div className="loader__block"><Loader /></div>
        : <GameList games={sortedAndSearchedGames} title='Каталог игр' />
      }
    </div>
  );
}

export default Catalog;