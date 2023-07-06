import React from 'react';

import './btnLink.scss';


const BtnLink = ({children, ...props}) => {
    return (
        <a {...props}>
            {children}
        </a>
    );
};

export default BtnLink;