import React from 'react';

const CarouselItem = ({item, width}) => {
    return (
        <div className='carousel__item' style={{ width: width }}>
            <img src={item.src} alt={item.alt} className='carousel__img' />
        </div>
    );
};

export default CarouselItem;