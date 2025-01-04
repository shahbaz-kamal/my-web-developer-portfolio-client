import React from 'react';

const Title = ({title}) => {
    return (
        <div>
            <h3 className='mb-4 md:mb-5 text-2xl md:text-4xl font-bold text-light-color-text dark:text-dark-color-text text-center'>{title}</h3>
        </div>
    );
};

export default Title;