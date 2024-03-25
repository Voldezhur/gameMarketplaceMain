import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context';
import { useNavigate } from "react-router-dom";

import cl from './Navbar.module.css';

import MyModal from '../MyModal/MyModal';

// Компонент навигационной панели
const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext); // состояние авторизованности
    const [modalMenu, setModalMenu] = useState(false); // состояние модального окна
    const navigate = useNavigate(); // функция редиректа

    // функция логаута
    const logout = () => {
        navigate(`/`, {replace: false});
        setIsAuth(false);
        localStorage.removeItem('auth');
    }

    return (
        <div className={cl.navbar}>
            <div className={cl.navbar__items}>
                <Link to="/" className={cl.navbar__link}>
                    XTHs Games
                </Link>
                <div onClick={() => setModalMenu(true)} className={cl.navbar__link}>
                    Меню
                </div>
                <MyModal visible={modalMenu} setVisible={setModalMenu} >
                    <div className="navbar__modalMenu__list">
                        <Link to="/" onClick={() => setModalMenu(false)} className={cl.navbar__modalMenu__link}>
                            Каталог
                        </Link>
                        <Link to="/support" onClick={() => setModalMenu(false)} className={cl.navbar__modalMenu__link}>
                            Поддержка
                        </Link>
                        <Link to="/cart" onClick={() => setModalMenu(false)} className={cl.navbar__modalMenu__link}>
                            Корзина
                        </Link>
                        <Link to="/profile" onClick={() => setModalMenu(false)} className={cl.navbar__modalMenu__link}>
                            Личный кабинет
                        </Link>
                    </div>
                </MyModal>
                <Link to="/support" className={cl.navbar__link}>
                    Поддержка
                </Link>
                <div onClick={logout} className={cl.navbar__link}>
                    Выйти
                </div>
            </div>
        </div>
    )
}

export default Navbar;