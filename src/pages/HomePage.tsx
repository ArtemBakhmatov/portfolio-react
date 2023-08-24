import { FC } from "react";
import { Helmet } from "react-helmet";
import { motion } from 'framer-motion';

import Promo from '../components/promo/Promo';

const HomePage: FC = () => {
    return (
        <>
            <Helmet>
                <meta
                    name="description"
                    content="Я Web-Разработчик"
                />
                <title>Главная</title>
            </Helmet>
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0, transition: { duration: 0.5 }}}
            >
                <Promo />
            </motion.div>
        </>
        
    );
};

export default HomePage;