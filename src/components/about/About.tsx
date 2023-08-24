import './about.scss';

import mainFoto from '../../assets/img/main_foto.jpg';

const About = () => {
    return (
        <section className='about'>
			<div className="container">
				<div className="about__flex">
					<div className="about__text">
						<h1 className="title-h1-before">
							Про меня
						</h1>
						<div className="about__descr">
							Приветствую, меня зовут Артем Бахматов, я&nbsp;начинающий веб-разработчик, строю новую карьеру на&nbsp;том, что мне действительно нравится. В&nbsp;течение двух лет я&nbsp;оттачивал свои навыки в&nbsp;сфере веб-разработчик, изучая как верстать адаптивные страницы на&nbsp;все устройства и&nbsp;как создавать веб-приложения с&nbsp;использованием HTML, CSS, JS, ReactJS, NodeJS, базы данных MySQL и&nbsp;PostgreSQL, одновременно писал проекты для закрепления навыков на&nbsp;практике.
						</div>
						<h2 className="title-h2">
							Навыки
						</h2>
						<div className="about__skills">
							<div className="about__skills-descr">
								Frontend: <span>HTML, SCSS, JS, GULP, WEBPACK, REACT, GIT</span>
							</div>
							<div className="about__skills-descr">
								Backend: <span>NodeJS, PHP, MySQL, PostgreSQL</span>
							</div>
						</div>
					</div>
					<div className="about__foto">
						<img src={mainFoto} alt="main_foto" className='about__foto-img'/>
					</div>
				</div>
			</div>
		</section>
    );
};

export default About;