import { Helmet } from "react-helmet";
import { useParams } from 'react-router-dom';

import BtnLink from '../btnLink/BtnLink';
import dataBase from '../../services/dataBase';

import GithubSvg from '../SocialNetworkIcons/GithubSvg';
import SiteSvg from '../SocialNetworkIcons/SiteSvg';

import './projectId.scss';

const ProjectId = () => {
    const {id} = useParams();
    const projectId = dataBase[id];

    return (
        <>
            <Helmet>
                    <meta
                        name="description"
                        content={`Проект: ${projectId.title}`}
                    />
                    <title>{projectId.title}</title>
            </Helmet>
            <section className='projectId'>
                <div className="container">
                    <h1 className="projectId__title">
                        
                    </h1>
                    <div className="projectId__wrapper">
                        <div className="projectId__img">
                            <img src={projectId.imgBig} alt={projectId.title} />
                        </div>
                        <div className="projectId__skills">
                            Skills: {projectId.skills}
                        </div>
                        <div className="projectId__flex">
                            {projectId.gitHubLink &&
                                <BtnLink className='btnLink' href={projectId.gitHubLink} target='_blank'>
                                    <GithubSvg /> <span className='btnLink__name'>GitHub</span>
                                </BtnLink>
                            }

                            {projectId.liveSiteLink &&
                                <BtnLink className='btnLink' href={projectId.liveSiteLink} target='_blank'>
                                    <SiteSvg /> <span className='btnLink__name'>WebSite</span>
                                </BtnLink>
                            } 
                        </div> 
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProjectId;