import { Helmet } from "react-helmet";
import { motion } from 'framer-motion';
import { useState, useEffect } from "react";

import ProjectsList from '../components/projectList/ProjectList';
import Spinner from "../components/Spinner/Spinner";


const ProjectsPage = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
          setLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <Helmet>
                    <meta
                        name="description"
                        content="Проекты моих работ"
                    />
                    <title>Проекты</title>
            </Helmet>
            { loading 
                ?
                    <Spinner />
                :
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0, transition: { duration: 0.5 }}}
                >
                    <ProjectsList />
                </motion.div>
            }

            

        </>
        
    );
};

export default ProjectsPage;