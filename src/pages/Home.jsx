import React, { useContext } from 'react';
import Carousel from '../component/Carousel';
import TabsCategories from '../component/TabsCategories';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <TabsCategories></TabsCategories>
        </div>
    );
};

export default Home;