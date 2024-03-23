import React, { useState } from 'react';

import '../styles/App.css';
import '../styles/Support.css';

import MyModal from '../components/UI/MyModal/MyModal';
import MyButton from '../components/UI/button/MyButton';
import MyInput from '../components/UI/input/MyInput';

// Страница поддержки
const Support = () => {
    const [modalSupport, setModalSupport] = useState(false); // состояние модального окна

    return (
        <div className="mainContent">
            <div className="welcome">
                <h1>
                    Добро пожаловать в раздел поддержки!<br/>
                    Чем мы можем Вам помочь?
                </h1>
            </div>
            <div className="popular__questions">
                <h1>
                    Популярные вопросы
                </h1>
                <div className="popular__questions__list">
                    <div className="popular__questions__item">
                        Если мне не понравится игра, могу ли я вернуть свои деньги?
                    </div>
                    <div className="popular__questions__item">
                        Какими способами я могу оплатить товар?
                    </div>
                    <div className="popular__questions__item">
                        Как активировать купленный ключ?
                    </div>
                </div>
            </div>
            <div className="any__questions">
                <MyButton onClick={() => setModalSupport(true)}>
                    Напишите нам
                </MyButton>
                <MyModal visible={modalSupport} setVisible={setModalSupport}>
                    <form>
                        <h2>Опишите суть проблемы</h2>
                        <MyInput type="textarea" placeholder="Введите сообщение"/>
                        <MyButton>Отправить</MyButton>
                    </form>
                </MyModal>
            </div>
        </div>
    )
}

export default Support;