import React, { useState } from 'react';

import '../styles/App.css';
import '../styles/Support.css';

import MyModal from '../components/UI/MyModal/MyModal';
import MyButton from '../components/UI/button/MyButton';
import MyInput from '../components/UI/input/MyInput';

// Страница поддержки
const Support = () => {
    const [modalSupport, setModalSupport] = useState(false);

    return (
        <div className="mainContent">
            <div className="welcome">
                <h1>
                    Добро пожаловать в раздел поддержки!<br/>
                    Чем мы можем Вам помочь?
                </h1>
            </div>
            <div className="popular_questions">
                <h1>
                    Популярные вопросы
                </h1>
                <div>
                    <div>
                        Если мне не понравится игра, могу ли я вернуть свои деньги?
                    </div>
                    <div>
                        Какими способами я могу оплатить товар?
                    </div>
                    <div>
                        Как активировать купленный ключ?
                    </div>
                </div>
            </div>
            <div className="any_questions">
                <MyButton onClick={() => setModalSupport(true)}>
                    Напишите нам
                </MyButton>
                <MyModal visible={modalSupport} setVisible={setModalSupport}>
                    <form>
                        <MyInput type="textarea" placeholder="Введите сообщение"/>
                        <MyButton>Отправить</MyButton>
                    </form>
                </MyModal>
            </div>
        </div>
    )
}

export default Support;