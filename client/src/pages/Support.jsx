import React from 'react';

import '../styles/App.css';
import '../styles/Support.css';

import MyButton from '../components/UI/button/MyButton';

// Страница поддержки
const Support = () => {
    return (
        <div className="mainContent">
            <div className="welcome">
                <h1>
                    Добро пожаловать в раздел поддержки!
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
                <MyButton>
                    Напишите нам
                </MyButton>
            </div>
        </div>
    )
}

export default Support;