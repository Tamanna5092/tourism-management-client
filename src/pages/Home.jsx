import React, { useContext } from 'react';
import Carousel from '../component/Carousel';
import TabsCategories from '../component/TabsCategories';
import Gallery from '../component/Gallery';
import OurGuides from '../component/OurGuides';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <TabsCategories></TabsCategories>
            <Gallery></Gallery>
            <OurGuides></OurGuides>
        </div>
    );
};

export default Home;