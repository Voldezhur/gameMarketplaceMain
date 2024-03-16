import React, { useContext } from 'react';
import { AuthContext } from '../context';

import '../styles/App.css';
import '../styles/Login.css';

import MyInput from '../components/UI/input/MyInput';
import MyButton from '../components/UI/button/MyButton';

// Страница авторизации
const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    const login = (event) => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true');
    }

    return (
        <div className="mainContent">
            <h1 style={{textAlign: 'center'}}>XTNs Games</h1>
            <div className="loginBlock">
                <h2>Авторизация</h2>
                <form onSubmit={login} className="loginForm">
                    <MyInput type="text" placeholder='Введите логин'/>
                    <MyInput type="password" placeholder='Введите пароль'/>
                    <MyButton>Войти</MyButton>
                </form>
            </div>
        </div>
    )
}

export default Login;