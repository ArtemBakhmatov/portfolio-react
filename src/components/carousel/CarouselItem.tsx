import { FC } from 'react';

interface ICarouselItem {
    item: any;
    width: string
}
const CarouselItem: FC<ICarouselItem> = ({item, width}) => {
    return (
        <div className='carousel__item' style={{ width: width }}>
            <img src={item.src} alt={item.alt} className='carousel__img' />
        </div>
    );
};

export default CarouselItem;