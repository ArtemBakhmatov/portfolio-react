import React from 'react';
import { motion } from 'framer-motion';

import Error from '../components/error/Error';

const ErrorPage = () => {
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0, transition: { duration: 0.5 }}}
        >
            <Error />
        </motion.div>
    );
};

export default ErrorPage;