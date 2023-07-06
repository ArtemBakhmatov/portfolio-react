import React from 'react';

const CarouselDots = ({images, updateIndex, activeIndex}) => {
    const styleActive = 'carousel__dot carousel__dot-active',
                style = 'carousel__dot';

    return (
        <div className="carousel__indicators">
                        {images.map((item, i) =>
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