import { FC, useState } from 'react';

import CarouselItem from './CarouselItem';
import CarouselDots from './CarouselDots';
import ArrowNext from './ArrowNext';
import ArrowPrev from './ArrowPrev';

import './carousel.scss';

import rpoSertificat from '../../assets/img/certificates/rpo-sertificat.jpg';
import topDiplom from '../../assets/img/certificates/TOP.jpg';
import webFullstack from '../../assets/img/certificates/web_fullstack.jpg';

interface IImages {
    id: number;
    alt: string;
    src: string;
}

const Carousel: FC = () => {
    const images: IImages[] = [
        {
            id: 1,
            alt: 'Сертификат Разработка ПО',
            src: rpoSertificat
        },
        {
            id: 2,
            alt: 'Диплом Академия TOP',
            src: topDiplom
        },
        {
            id: 3,
            alt: 'Сертификат Веб-Разработка',
            src: webFullstack
        },
    ];

    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [touchPosition, setTouchPosition] = useState<number | null>(null);

    const updateIndex = (newIndex: number) => {
        if (newIndex < 0) {
            newIndex = images.length - 1;
        } else if (newIndex >= images.length) {
            newIndex = 0;
        }
        setActiveIndex(newIndex);
    };

    const handleTouchStart = (e: any) => {
        const touchDown = e.touches[0].clientX;
        setTouchPosition(touchDown);
        console.log(touchDown);
    }

    const handleTouchMove = (e: any) => {
        const touchDown = touchPosition

        if(touchDown === null) {
            return
        }

        const currentTouch = e.touches[0].clientX
        const diff = touchDown - currentTouch

        if (diff > 6) {
            updateIndex(activeIndex + 1);
        }

        if (diff < -6) {
            updateIndex(activeIndex - 1);
        }

        setTouchPosition(null);
    }

    return (
        <section className='carousel'>
			<div className="container">
				<h1 className="title-h1-before title-h1-before__carousel">
					Сертификаты
				</h1>

                <div className="carousel__wrapper">
                    <ArrowPrev onClick={() => updateIndex(activeIndex - 1)} />
                    <div className="carousel__window"
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                    >
                        <div 
                            className="carousel__inner"
                            style={{transform: `translate(-${activeIndex * 100}%)`}}
                        >
                            {images.map((item) => 
                                <CarouselItem item={item} width={'100%'} key={item.id} />
                            )}
                        </div>
                    </div>
                    <ArrowNext onClick={() => updateIndex(activeIndex + 1)} />
                    <CarouselDots images={images} updateIndex={updateIndex} activeIndex={activeIndex} id={0} />
                </div>
			</div>
		</section>
    );
};

export default Carousel;