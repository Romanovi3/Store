import React, {useEffect, useContext} from 'react';
import {CustomContext} from "../Content/Context.jsx";

const Filter = () => {

    const {filterProduct} = useContext(CustomContext);
    const [currentFilter, setCurrentFilter] = React.useState({
        all: '',
        men: `men's clothing`,
        woman: `women's clothing`,
        jewelery: 'jewelery',
        electronics: 'electronics'
    });


    return (
        <form action="#" className='filter-form flex items-center justify-center gap-7 mt-5'>
            <p><span className='p-2'>All</span>
                <input
                    type='radio'
                    name='productFilter'
                    value={currentFilter.all}
                    onChange={filterProduct}
                />
            </p>
            <p><span className='p-2'>Men's</span>
                <input
                    type='radio'
                    name='productFilter'
                    value={currentFilter.men}
                    onChange={filterProduct}
                />
            </p>
            <p><span className='p-2'>Woman's</span>
                <input
                    type='radio'
                    name='productFilter'
                    value={currentFilter.woman}
                    onChange={filterProduct}
                />
            </p>
            <p><span className='p-2'>Jewelery</span>
                <input
                    type='radio'
                    name='productFilter'
                    value={currentFilter.jewelery}
                    onChange={filterProduct}
                />
            </p>
            <p><span className='p-2'>Electronics</span>
                <input
                    type='radio'
                    name='productFilter'
                    value={currentFilter.electronics}
                    onChange={filterProduct}
                />
            </p>
        </form>
    );
};

export default Filter;