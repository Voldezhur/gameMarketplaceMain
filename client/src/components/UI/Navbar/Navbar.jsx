import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context';

import cl from './Navbar.module.css';

import MyModal from '../MyModal/MyModal';

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const [modalMenu, setModalMenu] = useState(false);

    const logout = () => {
        setIsAuth(false);
        
        localStorage.removeItem('auth');
    }

    return (
        <div className={cl.navbar}>
            <div className={cl.navbar__items}>
                <Link to="/" className={cl.navbar__link}>XTHs Logo</Link>
                <button onClick={() => setModalMenu(true)} className={cl.navbar__link}>Меню</button>
                <MyModal visible={modalMenu} setVisible={setModalMenu} >
                    <div>
                        <Link to="/" onClick={() => setModalMenu(false)} className={cl.navbar__modalMenu__link}>Главная</Link>
                        <Link to="/support" onClick={() => setModalMenu(false)} className={cl.navbar__modalMenu__link}>Поддержка</Link>
                        <Link to="#" onClick={() => setModalMenu(false)} className={cl.navbar__modalMenu__link}>Отзывы</Link>
                        <Link to="#" onClick={() => setModalMenu(false)} className={cl.navbar__modalMenu__link}>Личный кабинет</Link>
                    </div>
                </MyModal>
                <Link to="/support" className={cl.navbar__link}>Поддержка</Link>
                <button onClick={logout} className={cl.navbar__link}>Выйти</button>
            </div>
        </div>
    )
}

export default Navbar;