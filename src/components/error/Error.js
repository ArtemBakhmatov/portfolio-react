import React from 'react';

import './error.scss';

import srcError from '../../assets/img/Error.png';
const altError = 'Несуществующая страница';

const Error = () => {
    return (
        <section className='error'>
            <div className="error__wrapper">
                <img src={srcError} alt={altError} className='error__img'/>
                <div className="error__descr">
                    Вы перешли на несуществующую страницу!
                </div>
            </div>
        </section>
    );
};

export default Error;