import React from 'react';
import { NavLink } from 'react-router-dom';

const ProjectItem = ({img, title, index}) => {
    return (
        <li className="projects__item">
            <NavLink 
                to={`/project/${index}`}
                className='projects__link'
            >
                <img src={img} alt={title} className='projects__img' />
                <div className="projects__descr">{title}</div>
            </NavLink>
        </li>
    );
};

export default ProjectItem;