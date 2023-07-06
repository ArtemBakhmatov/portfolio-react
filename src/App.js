import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import AppRouter from './router/AppRouter';
import ScrollToTop from './utils/ScrollToTop';

import './scss/style.scss';

const App = () => {
	return (
		<Router>
			<ScrollToTop />
			<Header />
			<AppRouter />
			<Footer />
		</Router>	
	);
};


export default App;