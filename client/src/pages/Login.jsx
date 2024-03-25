import React, { useState, useContext } from 'react';
import { AuthContext } from '../context';

import '../styles/App.css';
import '../styles/Login.css';

import MyInput from '../components/UI/input/MyInput';
import MyButton from '../components/UI/button/MyButton';

// Страница авторизации
const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext); // состояние авторизованности
    const [formState, setFormState] = useState({step: 1, login: "", password: ""}) // состояние полей формы авторизации
    
    const continues = (e) => {
        e.preventDefault();
        const step = formState.step;
        setFormState({...formState, step: step + 1});
    }

    // функция авторизации
    const login = (event) => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true');
    }

    return (
        <div className="mainContent">
            <h1 className="loginPage__title">XTNs Games</h1>
            <div className="login__block">
                <div className="login__title">Авторизация</div>
                <form onSubmit={login} className="login__form">
                    <MyInput
                        value={formState.login}
                        onChange={e => setFormState({...formState, login: e.target.value})}
                        //required={true}
                        type="text"
                        placeholder='Введите логин'
                    />
                    <MyInput
                        value={formState.password}
                        onChange={e => setFormState({...formState, password: e.target.value})}
                        //required={true}
                        type="password"
                        placeholder='Введите пароль'
                    />
                    <MyButton type="submit">
                        Войти
                    </MyButton>
                </form>
            </div>
        </div>
    )
}

export default Login;