import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { motion } from 'framer-motion';

import Carousel from '../components/carousel/Carousel';
import Spinner from "../components/Spinner/Spinner";

const DiplomasPage = () => {
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
                        content="Учеба в Компьютерной академии TOP и онлайн курсы"
                    />
                    <title>Сертификаты</title>
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
                    <Carousel />
                </motion.div>
            }
        </>
        
    );
};

export default DiplomasPage;