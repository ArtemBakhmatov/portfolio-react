import { useState, useEffect } from "react";
import { motion } from 'framer-motion';

import ProjectId from '../components/projectId/ProjectId';
import Spinner from "../components/Spinner/Spinner";


const ProjectIdPage = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
          setLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);
    
    return (
        <>
            { loading 
                ?
                    <Spinner />
                :
                    <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0, transition: { duration: 0.5 }}}
                >
                        <ProjectId /> 
                </motion.div>
            }
        </>
    );
};

export default ProjectIdPage;