import { Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import arrayRoutes from './index';
import Spinner from '../components/Spinner/Spinner';

const AppRouter = () => {
    const location = useLocation();
    return (
        <AnimatePresence>
            <Suspense fallback={<Spinner />}>
                <Routes location={location} key={location.pathname}>
                    {arrayRoutes.map(route => 
                        <Route 
                            key={route.path}
                            path={route.path}
                            element={<route.component />}
                        />
                    )}  
                </Routes>
            </Suspense>  
        </AnimatePresence>
    );
};

export default AppRouter;

