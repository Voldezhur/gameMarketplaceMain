import axios from 'axios';
import './App.css';


// data это информация с сервера
const apiCall = () => {
  axios.get('http://localhost:8000').then((data) => {
    console.log(data)  // Вывод фронтенд консоли
  })
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={apiCall}>Запрос апи</button>
      </header>
    </div>
  );
}

export default App;
