import React, { useContext } from 'react';
import Carousel from '../component/Carousel';
import TabsCategories from '../component/TabsCategories';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const touristsSpots = useLoaderData()
    console.log(touristsSpots)
    return (
        <div>
            <Carousel></Carousel>
            <TabsCategories touristsSpots={touristsSpots}></TabsCategories>
        </div>
    );
};

export default Home;