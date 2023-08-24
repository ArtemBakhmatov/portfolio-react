import { FC } from 'react';

import './buttonFilter.scss';

interface IButtonFilter {
    filter: string;
    onFilterProject: (name: string) => void
}

interface IButtonData {
    name: string;
    label: string;
}

const ButtonFilter: FC<IButtonFilter> = ({filter, onFilterProject}) => {
    const buttonData: IButtonData[] = [
        { name: 'All', label: 'Все' },
        { name: 'Landing', label: 'Лендинг' },
        { name: 'Wordpress', label: 'Wordpress' },
        { name: 'React', label: 'React' },
        { name: 'Store', label: 'Магазин' },    
        { name: 'Bot', label: 'Бот' },
    ];

    const buttons = buttonData.map(({name, label}) => {
        const active = filter === name;
        const activeClass = 'buttonFilter__btn buttonFilter__btn-active';
        const normalClass = 'buttonFilter__btn';
        const classes = active ? activeClass : normalClass;

        return (
            <button
                key={name}
                type='button'
                className={classes}
                onClick={() => onFilterProject(name)}
            >
                {label}
            </button>
        )
    });

    return (
        <div className='buttonFilter'>
            {buttons}
        </div>
    )
};

export default ButtonFilter;