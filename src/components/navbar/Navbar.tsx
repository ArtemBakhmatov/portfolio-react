import { FC } from 'react';
import { NavLink, Link } from 'react-router-dom';

import './navbar.scss';

import pdfResume from '../../assets/pdf/Resume_Bakhmatov.pdf';

interface INavbar {
    toggleHamburger: () => void;
    handleTouchStart: any;
    handleTouchMove: any
}

const Navbar: FC<INavbar> = ({ toggleHamburger, handleTouchStart, handleTouchMove }) => {
    const normalLink = 'nav__link',
          activeLink = 'nav__link nav__link-active';

    return (
        <nav className='nav'  onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}>
            <ul className="nav__list">
                <li className="nav__item">
                    <NavLink 
                        onClick={() => toggleHamburger()}
                        to='/'
                        className={({isActive}) => isActive ? activeLink : normalLink}
    
                    >Главная</NavLink>
                </li>
                <li className="nav__item">
                    <NavLink
                        onClick={() => toggleHamburger()}
                        to='/projects'
                        className={({isActive}) => isActive ? activeLink : normalLink}
                    >Проекты</NavLink>
                </li>
                <li className="nav__item">
                    <NavLink 
                        onClick={() => toggleHamburger()}
                        to='/contacts'
                        className={({isActive}) => isActive ? activeLink : normalLink}
                    >Контакты</NavLink>
                </li>
                <li className="nav__item">
                    <Link
                        onClick={() => toggleHamburger()}
                        to={ pdfResume }
                        target='_blank'
                        className='nav__link'
                    >
                        Резюме
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;