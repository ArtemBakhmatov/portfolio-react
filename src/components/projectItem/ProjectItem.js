import React from 'react';
import { motion } from 'framer-motion';

import BtnLink from '../btnLink/BtnLink';
import GithubSvg from '../SocialNetworkIcons/GithubSvg';
import SiteSvg from '../SocialNetworkIcons/SiteSvg';

const ProjectItem = ({ title, imgSmal, skills, id, gitHubLink, liveSiteLink, variants }) => {
    return (
        <motion.li className="projects__item" variants={variants}>
            <img src={imgSmal} alt={title} className='projects__img' />
            <div className="projects__title">{title}</div>
            <div className="projects__btns">
                {gitHubLink &&
                    <BtnLink className='btnLink projects__btn' href={gitHubLink} target='_blank'>
                        <GithubSvg /> <span className='btnLink__name'>GitHub</span>
                    </BtnLink>
                }

                {liveSiteLink &&
                    <BtnLink className='btnLink projects__btn' href={liveSiteLink} target='_blank'>
                        <SiteSvg /> <span className='btnLink__name'>WebSite</span>
                    </BtnLink>
                } 
                    </div> 
            <div className='projects__hashtag'>
                { skills.map(item => 
                    <div key={item.name} className={`${ item.color }`}>
                        #{ item.name }
                    </div>
                )}
            </div>
        </motion.li>
    );
};

export default ProjectItem;