import { FC } from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import './promo.scss';

import logo from '../../assets/icons/icon-hacker.png';

const Promo: FC = () => {
    return (
        <section className='promo'>
			<div className="container">
				<div className="promo__wrapper">
					<Tilt className='promo__animation'>
						<div className="promo__flex">
							<motion.div 
								initial={{ y: -300 }}
								animate={{ y: -0 }}
								transition={{ type: 'spring' }}
								className="promo__logo"
							>
								<img src={logo} alt='' className="promo__logo-img" />
							</motion.div>
							<motion.div
								initial={{ x: -500 }}
								animate={{ x: -0 }}
								transition={{ type: 'spring' }}
								className="promo__subtitle">
								Меня зовут Артем Бахматов
							</motion.div>
							<h1 className="promo__title">
								Я Web-Разработчик
							</h1>
							<div className="promo__descr">
								Готов к обучению и саморазвитию
							</div>
							<motion.div
								initial={{ y: 300 }}
								animate={{ y: -0 }}
								transition={{ type: 'spring' }}
								className="promo__btns"
							>
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
							</motion.div>
						</div>
					</Tilt>
					
				</div>
			</div>
		</section>
    );
};

export default Promo;