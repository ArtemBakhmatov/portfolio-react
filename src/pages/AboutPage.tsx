import { useState, useEffect, FC } from "react";
import { Helmet } from "react-helmet";
import { motion } from 'framer-motion';

import About from '../components/about/About';
import Spinner from "../components/Spinner/Spinner";

const AboutPage: FC = () => {
    const [loading, setLoading] = useState<boolean>(true);

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
                        content="Рассказываю о себе и о своих навыках"
                    />
                    <title>Про меня</title>
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
                    <About />
                </motion.div>
            }
        </> 
    );
};

export default AboutPage;