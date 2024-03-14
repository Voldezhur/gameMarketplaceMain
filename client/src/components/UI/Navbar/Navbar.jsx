import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context';

import cl from './Navbar.module.css';

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth');
    }

    return (
        <div className={cl.navbar}>
            <div className={cl.navbar__items}>
                <Link to="/" className={cl.navbar__link}>XTHs Logo</Link>
                <button className={cl.navbar__link}>Меню</button>
                <Link to="/support" className={cl.navbar__link}>Поддержка</Link>
                <button onClick={logout} className={cl.navbar__link}>Выйти</button>
            </div>
        </div>
    )
}

export default Navbar;