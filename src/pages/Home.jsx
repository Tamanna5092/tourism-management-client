import React, { useContext } from 'react';
import Carousel from '../component/Carousel';
import TabsCategories from '../component/TabsCategories';
import Gallery from '../component/Gallery';
import OurGuides from '../component/OurGuides';
import DreamPlace from '../component/DreamPlace';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <DreamPlace></DreamPlace>
            <TabsCategories></TabsCategories>
            <Gallery></Gallery>
            <OurGuides></OurGuides>
        </div>
    );
};

export default Home;