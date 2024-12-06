import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const GuideInfo = () => {
    const guides = useLoaderData()
    const {id} = useParams()
    const guid = guides.find(guid => guid.id === parseInt(id))
    const {name, image, continent, info, description} = guid;
    return (
        <div className='max-w-7xl mx-auto'>
             <div className='grid grid-cols-3'>
                <div className='col-span-2 bg-amber-800'>
                    <h1>Name{name}</h1>
                    <p>Hello {continent}</p>
                </div>
                <div className='col-span-1 bg-cyan-600'>
                    <img src={image} alt="" />
                    <h1>
                        helo
                    </h1>
                </div>
             </div>
             <div>

             </div>
        </div>
    );
};

export default GuideInfo;