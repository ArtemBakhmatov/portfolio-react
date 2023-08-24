import React, { useState } from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from "framer-motion";

import dataBase from '../../services/dataBase';
import ProjectItem from '../projectItem/ProjectItem';
import ButtonFilter from '../buttonFilter/ButtonFilter';

import './projectList.scss';

const ProjectList = () => {
    const [filter, setFilter] = useState<string>('All');

    const filterProjects = (items: any, filter: string) => {
        switch (filter) {
            case 'Landing':
                return items.filter((item: any) => item.web === 'Landing');
            case 'Wordpress':
                return items.filter((item: any) => item.web === 'Wordpress');
            case 'Store':
                return items.filter((item: any) => item.web === 'Store');
            case 'React':
                return items.filter((item: any) => item.web === 'React');
            case 'Bot':
                return items.filter((item: any) => item.web === 'Bot');
            default:
                return items;
        }
    }

    const onFilterProject = (filter: string) => {
        setFilter(filter);
    }

    const visibleData = filterProjects(dataBase, filter);

    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.5,     // задержка детей
                staggerChildren: 0.5    // шатание
            }
        }
    };

    const itemMotion = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        },
        type: 'spring'
    };
    
     
    return (
        <section className='projects'>
            <div className="container">
                <h1 className="title-h1-before title-h1-before__projects">
					Проекты
				</h1>
                <ButtonFilter filter={filter} onFilterProject={onFilterProject} />
                <motion.ul 
                    className="projects__list" 
                    variants={container}
                    initial="hidden"
                    animate="visible"
                >
                    {visibleData.map((item: any) => 
                        <Tilt key={item.id}>
                            <ProjectItem
                                key={item.id}
                                index={item.id}
                                variants={itemMotion}
                                { ...item }
                            />
                        </Tilt>
                    )}
                </motion.ul>
            </div>
        </section>
    );
};

export default ProjectList;