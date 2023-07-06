import React from 'react';

import dataBase from '../../services/dataBase';
import ProjectItem from '../projectItem/ProjectItem';

import './projectList.scss';

const ProjectList = () => {
    return (
        <section className='projects'>
            <div className="container">
                <h1 className="title-h1-before title-h1-before__projects">
					Проекты
				</h1>
                <ul className="projects__list">
                    {dataBase.map((item, i) => 
                        <ProjectItem
                            key={i + 1}
                            title={item.title}
                            img={item.imgSmal}
                            index={i}
                        />
                    )}
                </ul>
            </div>
        </section>
    );
};

export default ProjectList;