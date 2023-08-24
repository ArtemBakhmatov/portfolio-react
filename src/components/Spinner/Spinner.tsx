import { FC } from 'react';
import { BounceLoader } from 'react-spinners';

import './spinner.scss';

const Spinner: FC = () => {
    return (
        <div className="loader">
            <div className="container container__flex">
                <BounceLoader  size={60} color={'#087ea4'} />
            </div>
        </div>
    );
};

export default Spinner;

