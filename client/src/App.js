import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Navbar from './components/UI/Navbar/Navbar';
import AppRouter from './components/AppRouter';
import { AuthContext } from './context';
import Footer from './components/UI/Footer/Footer';

const App = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true);
      setIsLoading(false);
    }
    else {
      setIsLoading(false);
    }
  }, [])

  return (
    isAuth
      ?
      <AuthContext.Provider value={{
        isAuth,
        setIsAuth,
        isLoading
      }}>
        <BrowserRouter>
          <Navbar />
          <AppRouter />
          <Footer />
        </BrowserRouter>
      </AuthContext.Provider>
      :
      <AuthContext.Provider value={{
        isAuth,
        setIsAuth,
        isLoading
      }}>
        <BrowserRouter>
          <AppRouter />
          <Footer />
        </BrowserRouter>
      </AuthContext.Provider>
  )
}

export default App;