import { FC } from 'react';

import './btnLink.scss';

interface IBtnLink {
    children: React.ReactNode,
}


const BtnLink: FC<IBtnLink> = ({children, ...props}) => {
    return (
        <a {...props}>
            {children}
        </a>
    );
};

export default BtnLink;