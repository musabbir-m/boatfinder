import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryProductCard from '../CategoryProductCard/CategoryProductCard';

const CategoryProducts = () => {
    const data= useLoaderData()
    console.log(data);
    return (
        <div className='mt-10 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-3'>
            {data.map(d=> <CategoryProductCard key={d._id} boat= {d}></CategoryProductCard>)}
        </div>
    );
};

export default CategoryProducts;