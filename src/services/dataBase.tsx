import uber from '../assets/img/projects/Uber.png';
import globalOpt from '../assets/img/projects/Global_opt.png';
import pulse from '../assets/img/projects/Pulse.png';
import food from '../assets/img/projects/Food.png';
import picture from '../assets/img/projects/Picture.png';
import smartWath from '../assets/img/projects/SmartWatch.png';
import portfolio from '../assets/img/projects/Portfolio_1.0.png';
import portfolio2 from '../assets/img/projects/Portfolio_2.0.png';
import marvelPortal from '../assets/img/projects/MarvelPortal.png';
import wordpress from '../assets/img/projects/Wordpress.png';
import posts from '../assets/img/projects/Posts.png';
import coffeeBase from '../assets/img/projects/CoffeBase.png';
import tzeezotje from '../assets/img/projects/Tzeezotje.png';

interface ISkills {
    name: string;
    color: string;
}

interface IProject {
    id: number;
    title: string;
    imgSmal: string;
    web: string;
    skills: ISkills[];
    gitHubLink: string;
    liveSiteLink: string;
}

const projects: IProject[] = [
    {   
        id: 1,
        title: 'Uber',
        imgSmal: uber,
        web: 'Landing',
        skills: [
            {
                name: 'HTML',
                color: 'blue-text-hashtag'
            },
            {
                name: 'CSS',
                color: 'green-text-hashtag'
            },
            {
                name: 'JS',
                color: 'orange-text-hashtag'
            },
            {
                name: 'Bootstrap',
                color: 'blue-text-hashtag'
            }
        ],
        gitHubLink: 'https://github.com/ArtemBakhmatov/Artembakhmatov.github.io',
        liveSiteLink: 'https://portfolio.bakhmatovweb.ru/Projects/Uber/'
    },
    {
        id: 2,
        title: 'Pulse',
        imgSmal: pulse,
        web: 'Landing',
        skills: [
            {
                name: 'HTML',
                color: 'blue-text-hashtag'
            },
            {
                name: 'SCSS',
                color: 'green-text-hashtag'
            },
            {
                name: 'JS',
                color: 'orange-text-hashtag'
            },
            {
                name: 'Jquery',
                color: 'blue-text-hashtag'
            }
        ],
        gitHubLink: 'https://github.com/ArtemBakhmatov/PULSE',
        liveSiteLink: 'https://portfolio.bakhmatovweb.ru/Projects/Pulse/'
    },
    {
        id: 3,
        title: 'Global Opt',
        imgSmal: globalOpt,
        web: 'Landing',
        skills: [
            {
                name: 'HTML',
                color: 'blue-text-hashtag'
            },
            {
                name: 'SCSS',
                color: 'green-text-hashtag'
            },
            {
                name: 'JS',
                color: 'orange-text-hashtag'
            },
            {
                name: 'Jquery',
                color: 'blue-text-hashtag'
            }
        ],
        gitHubLink: 'https://github.com/ArtemBakhmatov/Global-Opt',
        liveSiteLink: 'https://portfolio.bakhmatovweb.ru/Projects/Global_Opt/'
    },
    {
        id: 4,
        title: 'Food',
        imgSmal: food,
        web: 'Landing',
        skills: [
            {
                name: 'HTML',
                color: 'blue-text-hashtag'
            },
            {
                name: 'SCSS',
                color: 'green-text-hashtag'
            },
            {
                name: 'JS',
                color: 'orange-text-hashtag'
            },
            {
                name: 'Webpack',
                color: 'blue-text-hashtag'
            }
        ],
        gitHubLink: 'https://github.com/ArtemBakhmatov/js-practica',
        liveSiteLink: 'https://portfolio.bakhmatovweb.ru/Projects/food/'
    },
    {
        id: 5,
        title: 'Picture',
        imgSmal: picture,
        web: 'Landing',
        skills: [
            {
                name: 'HTML',
                color: 'blue-text-hashtag'
            },
            {
                name: 'SCSS',
                color: 'green-text-hashtag'
            },
            {
                name: 'JS',
                color: 'orange-text-hashtag'
            },
            {
                name: 'Bootstrap',
                color: 'blue-text-hashtag'
            },
            {
                name: 'Gulp',
                color: 'green-text-hashtag'
            }
        ],
        gitHubLink: 'https://github.com/ArtemBakhmatov/Project2.A-voluminous-project-in-a-classic-style',
        liveSiteLink: 'https://portfolio.bakhmatovweb.ru/Projects/Picture/'
    },
    {
        id: 6,
        title: 'Portfolio_1.0',
        imgSmal: portfolio,
        web: 'Landing',
        skills: [
            {
                name: 'HTML',
                color: 'blue-text-hashtag'
            },
            {
                name: 'SCSS',
                color: 'green-text-hashtag'
            },
            {
                name: 'JS',
                color: 'orange-text-hashtag'
            }
        ],
        gitHubLink: 'https://github.com/ArtemBakhmatov/PORTFOLIO',
        liveSiteLink: 'https://portfolio.bakhmatovweb.ru/'
    },
    {
        id: 7,
        title: 'Portfolio_2.0',
        imgSmal: portfolio2,
        web: 'React',
        skills: [
            {
                name: 'React',
                color: 'blue-text-hashtag'
            }
        ],
        gitHubLink: 'https://github.com/ArtemBakhmatov/portfolio-react',
        liveSiteLink: ''
    },
    {
        id: 8,
        title: 'Online store',
        imgSmal: smartWath,
        web: 'Store',
        skills: [
            {
                name: 'HTML',
                color: 'blue-text-hashtag'
            },
            {
                name: 'SCSS',
                color: 'green-text-hashtag'
            },
            {
                name: 'JS',
                color: 'orange-text-hashtag'
            },
            {
                name: 'Gulp',
                color: 'blue-text-hashtag'
            },
            {
                name: 'Webpack',
                color: 'green-text-hashtag'
            },
        ],
        gitHubLink: 'https://github.com/ArtemBakhmatov/SmartWatch',
        liveSiteLink: 'https://portfolio.bakhmatovweb.ru/Projects/SmartWatch/'
    }, 
    {
        id: 9,
        title: 'Marvel Portal',
        imgSmal: marvelPortal,
        web: 'React',
        skills: [
            {
                name: 'React',
                color: 'blue-text-hashtag'
            },
            {
                name: 'API',
                color: 'green-text-hashtag'
            }
        ],
        gitHubLink: 'https://github.com/ArtemBakhmatov/Portal_Marvel-ReactJS',
        liveSiteLink: 'https://reactmarvel.bakhmatovweb.ru/'
    }, 
    {
        id: 10,
        title: 'Мир Детства',
        imgSmal: wordpress,
        web: 'Wordpress',
        skills: [
            {
                name: 'PHP',
                color: 'blue-text-hashtag'
            },
            {
                name: 'MySQL',
                color: 'green-text-hashtag'
            },
            {
                name: 'CMS: Wordpress',
                color: 'orange-text-hashtag'
            }
        ],
        gitHubLink: 'https://github.com/ArtemBakhmatov/childhood_Wordpress',
        liveSiteLink: 'https://wordpress.bakhmatovweb.ru/'
    }, 
    {
        id: 11,
        title: 'Posts',
        imgSmal: posts,
        web: 'React',
        skills: [
            {
                name: 'React',
                color: 'blue-text-hashtag'
            },
            {
                name: 'JSONPlaceholder-API',
                color: 'green-text-hashtag'
            }
        ],
        gitHubLink: 'https://github.com/ArtemBakhmatov/Posts_JSONPlaceholder-ReactJS',
        liveSiteLink: 'https://react-jsonplaceholder-post.bakhmatovweb.ru/'
    }, 
    {
        id: 12,
        title: 'Coffee-Base',
        imgSmal: coffeeBase,
        web: 'React',
        skills: [
            {
                name: 'React',
                color: 'blue-text-hashtag'
            }
        ],
        gitHubLink: 'https://github.com/ArtemBakhmatov/coffee_shop-react',
        liveSiteLink: 'https://react-coffee-base.bakhmatovweb.ru/'
    }, 
    {
        id: 13,
        title: 'Tzeezotje',
        imgSmal: tzeezotje,
        web: 'Landing',
        skills: [
            {
                name: 'HTML',
                color: 'blue-text-hashtag'
            },
            {
                name: 'SCSS',
                color: 'green-text-hashtag'
            },
            {
                name: 'JS',
                color: 'orange-text-hashtag'
            },
            {
                name: 'Gulp',
                color: 'blue-text-hashtag'
            },
            {
                name: 'Webpack',
                color: 'green-text-hashtag'
            },
        ],
        gitHubLink: 'https://github.com/ArtemBakhmatov/Tzeezotje-Landing',
        liveSiteLink: 'https://bakhmatovweb.ru/'
    }, 
];

export default projects;