import { Helmet } from "react-helmet";
import { motion } from 'framer-motion';

import Contacts from '../components/contacts/Contacts';

const ContactsPage = () => {
    return (
        <>
            <Helmet>
                    <meta
                        name="description"
                        content="Геолокация, номер телефона и электроная почта"
                    />
                    <title>Контакты</title>
            </Helmet>
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0, transition: { duration: 0.5 }}}
            >
                <Contacts />
            </motion.div>
        </>
        
    );
};

export default ContactsPage;