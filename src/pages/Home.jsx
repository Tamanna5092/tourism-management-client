import React, { useContext } from 'react';
import Carousel from '../component/Carousel';
import TabsCategories from '../component/TabsCategories';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const touristsSpot = useLoaderData()
    console.log(touristsSpot)
    return (
        <div>
            <Carousel></Carousel>
            <TabsCategories></TabsCategories>
        </div>
    );
};

export default Home;