import { Link } from 'react-router-dom';

import GithubSvg from '../SocialNetworkIcons/GithubSvg';
import VkSvg from '../SocialNetworkIcons/VkSvg';
import TelegrammSvg from '../SocialNetworkIcons/TelegrammSvg';
import WhatsAppSvg from '../SocialNetworkIcons/WhatsAppSvg';

import './footer.scss';

const Footer = () => {
    return (
        <footer className='footer'>
			<div className="container">
				<div className='footer__wrapper'>
					<div className="footer__copyright">
						© 2023 portfolio.bakhmatovweb.ru
					</div>
					<ul className='social'>
						<li className="social__item">
							<Link
								to='https://github.com/ArtemBakhmatov'
								target='_blank' 
								className='social__link social__link-bgGithub'
								
							>
								<GithubSvg />
							</Link>
						</li>
						<li className="social__item">
							<Link
								to='https://vk.com/id59034447'
								target='_blank' 
								className='social__link social__link-bgVk'
								
							>
								<VkSvg />
							</Link>
						</li>
						<li className="social__item">
							<Link
								to='https://t.me/ip_bakhmatov'
								target='_blank' 
								className='social__link social__link-bgTelegram'
								
							>
								<TelegrammSvg />
							</Link>
						</li>
						<li className="social__item">
							<Link
								to='https://wa.me/79307426646'
								target='_blank' 
								className='social__link social__link-bgWhatsApp'
								
							>
								<WhatsAppSvg />
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</footer>
    );
};

export default Footer;