import { FC } from 'react';

import './hamburger.scss';

interface IHamburger {
    toggleHamburger: () => void
}

const Hamburger: FC<IHamburger> = ({toggleHamburger}) => {
    return (
        <div className="hamburger" onClick={() => toggleHamburger()}>
            <div className="hamburger__wrapper">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
};

export default Hamburger;