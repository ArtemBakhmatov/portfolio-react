import React from 'react';

import './contacts.scss';

const Contacts = () => {
    return (
        <section className='contacts'>
            <div className="container">
                <div className="contacts__wrapper"> 
                    <div className="contacts__animation">
                        <h1 className="contacts__title">
                            Контакты
                        </h1>
                        <h2 className="contacts__subtitle">
                            Локация
                        </h2>
                        <div className="contacts__descr">
                            Россия, Владимир
                        </div>
                        <h2 className="contacts__subtitle">
                            Telegram / WhatsApp
                        </h2>
                        <a href='tel:+79307426646' className="contacts__link">
                            +7 (930) 742-66-46
                        </a>
                        <h2 className="contacts__subtitle">
                            Email
                        </h2>
                        <a href='mailto:ip.bakhmatov@mail.ru' className="contacts__link">
                            ip.bakhmatov@mail.ru
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contacts;