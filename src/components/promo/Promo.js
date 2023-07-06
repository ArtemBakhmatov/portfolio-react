import React from 'react';
import { Link } from 'react-router-dom';

import './promo.scss';

import logo from '../../assets/icons/icon-hacker.png';

const Promo = () => {
    return (
        <section className='promo'>
			<div className="container">
				<div className="promo__wrapper">
					<div className="promo__animation">
						<div className="promo__flex">
							<div className="promo__logo">
								<img src={logo} alt='' className="promo__logo-img" />
							</div>
							<div className="promo__subtitle">
								Меня зовут Артем Бахматов
							</div>
							<h1 className="promo__title">
								Я Web-Разработчик
							</h1>
							<div className="promo__descr">
								Готов к обучению и саморазвитию
							</div>
							<div className="promo__btns">
								<Link 
									to='/about'
									className='promo__link'
								>	
									Про меня
								</Link>
								<Link 
									to='/diplomas'
									className='promo__link'
								>
									Сертификаты
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
    );
};

export default Promo;