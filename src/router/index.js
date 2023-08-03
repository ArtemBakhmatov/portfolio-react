import HomePage from '../pages/HomePage';
import ProjectsPage from '../pages/ProjectsPage';
import ContactsPage from '../pages/ContactsPage';
import AboutPage from '../pages/AboutPage';
import ErrorPage from '../pages/ErrorPage';
import DiplomasPage from '../pages/DiplomasPage';

const arrayRoutes = [
    { path: '/', component: HomePage },
    { path: '/projects', component: ProjectsPage },
    { path: '/contacts', component: ContactsPage },
    { path: '/about', component: AboutPage },
    { path: '/diplomas', component: DiplomasPage },
    { path: '/*', component: ErrorPage },
];

export default arrayRoutes;