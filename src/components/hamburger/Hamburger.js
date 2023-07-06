import './hamburger.scss';

const Hamburger = ({toggleHamburger}) => {
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