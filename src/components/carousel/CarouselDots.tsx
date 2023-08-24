import { FC } from 'react';

interface ICarouselDots {
    images: any;
    updateIndex: (num: number) => void;
    activeIndex: number;
    id: number
}

const CarouselDots: FC<ICarouselDots> = ({images, updateIndex, activeIndex}) => {
    const styleActive = 'carousel__dot carousel__dot-active',
                style = 'carousel__dot';

    return (
        <div className="carousel__indicators">
            {images.map((item: any, i: number) =>
                <div 
                    key={item.id}
                    className={i === activeIndex ? styleActive : style}
                    onClick={() => updateIndex(i)}
                ></div>
            )}
        </div>
    );
};

export default CarouselDots;