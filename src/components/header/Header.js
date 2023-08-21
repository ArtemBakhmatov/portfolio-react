import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../navbar/Navbar';
import DarkTheme from '../darkTheme/DarkTheme';

import './header.scss';

import logo from '../../assets/icons/icon-hacker.png';
import Hamburger from '../hamburger/Hamburger';

const Header = () => {
	const [menuActive, setMenuActive] = useState('hamburger');
    const [touchPosition, setTouchPosition] = useState(null);

    useEffect(() => {
        if (menuActive === 'hamburger__active') {
            document.querySelector('.hamburger').classList.add('hamburger__active');
            document.querySelector('.hamburger__wrapper').classList.add('hamburger__wrapper-active');
            document.querySelector('.nav').classList.add('nav__active');
        } else {
            document.querySelector('.hamburger').classList.remove('hamburger__active');
            document.querySelector('.hamburger__wrapper').classList.remove('hamburger__wrapper-active');
            document.querySelector('.nav').classList.remove('nav__active');
        }
    }, [menuActive]);

    const toggleHamburger = () => {
        setMenuActive((currentValue) => {
            return currentValue === 'hamburger' ? 'hamburger__active' : 'hamburger';
        })
    }

    const handleTouchStart = (e) => {
        const touchDown = e.touches[0].clientX;
        setTouchPosition(touchDown);
        console.log(touchDown);
    }

    const handleTouchMove = (e) => {
        const touchDown = touchPosition

        if(touchDown === null) {
            return
        }

        const currentTouch = e.touches[0].clientX;
        const diff = touchDown - currentTouch;

        if (diff < -6) {
            toggleHamburger()
        }

        setTouchPosition(null);
    }
    
    return (
        <header className='header'>
			<div className="container">
				<Hamburger toggleHamburger={toggleHamburger} />
				{<div className="header__flex">
					<div className="header__logo">
                        <Link
                            to='/'
                            className='header__logo-link'
                        >
                            <img src={logo} alt="logo" className="header__logo-img" />
                        </Link>
						<div className="textAnimation">
							<span className='textAnimation__bold'>Web-Developer </span>
							Portfolio
						</div>	
					</div>

					<div className="header__right">
                        <Navbar 
                            toggleHamburger={toggleHamburger}
                            handleTouchStart={handleTouchStart}
                            handleTouchMove={handleTouchMove} 
                        />
						<DarkTheme />
					</div>
				</div>}
			</div>
		</header>
    );
};

export default Header;