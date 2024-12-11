import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import CountryCard from "./CountryCard";
import { useEffect, useState } from "react";
import axios from 'axios'

const TabsCategories = () => {
  const [touristsSpots, setTouristsSpots] = useState([])

    useEffect(() => {
      const getData = async() => {
        const {data} = await axios(`${import.meta.env.VITE_API_URL}/touristsSpots`)
        console.log(data)
        setTouristsSpots(data)
      }
      getData()
    }, [])
  

  return (
    <Tabs>
      <div className="my-10 max-w-7xl mx-auto">
        <h1 className="font-lato text-center text-5xl font-bold">Go Exotic Places</h1>
        <p className="text-[#121111b2] text-center mt-4 px-2 md:px-0">
          When it comes to exploring exotic places, the choices are numerous.
          Whether you like peaceful destinations or vibrant landscapes, we have
          offers for you.This beautiful destination boasts stunning landscapes,
          vibrant culture, and peaceful resorts, offering the perfect escape for
          adventure, relaxation, and unforgettable experiences for every
          traveler.
        </p>
        <div className="flex justify-center items-center my-6">
          <TabList>
            <Tab>Southeast Asia</Tab>
            <Tab>Europe</Tab>
            <Tab>America</Tab>
            <Tab>Africa</Tab>
            <Tab>Middle East</Tab>
            <Tab>Central Asia</Tab>
          </TabList>
        </div>

        <TabPanel>
          <div className="grid grid-cols-1 gap-8 mx-2 my-10 md:grid-cols-2 lg:grid-cols-3 lg:mx-0">
            {
              touristsSpots.filter(tourSpot => tourSpot.continent === "Southeast Asia").map((touristSpot, _id) => <CountryCard key={_id} touristSpot={touristSpot}></CountryCard>)
            }
          </div>
        </TabPanel>
        <TabPanel>
        <div className="grid grid-cols-1 gap-8 mx-2 my-10 md:grid-cols-2 lg:grid-cols-3 lg:mx-0">
            {
              touristsSpots.filter(tourSpot => tourSpot.continent === "Europe").map((touristSpot, _id) => <CountryCard key={_id} touristSpot={touristSpot}></CountryCard>)
            }
          </div>
        </TabPanel>
        <TabPanel>
        <div className="grid grid-cols-1 gap-8 mx-2 my-10 md:grid-cols-2 lg:grid-cols-3 lg:mx-0">
            {
              touristsSpots.filter(tourSpot => tourSpot.continent === "America").map((touristSpot, _id) => <CountryCard key={_id} touristSpot={touristSpot}></CountryCard>)
            }
          </div>
        </TabPanel>
        <TabPanel>
        <div className="grid grid-cols-1 gap-8 mx-2 my-10 md:grid-cols-2 lg:grid-cols-3 lg:mx-0">
            {
              touristsSpots.filter(tourSpot => tourSpot.continent === "Africa").map((touristSpot, _id) => <CountryCard key={_id} touristSpot={touristSpot}></CountryCard>)
            }
          </div>
        </TabPanel>
        <TabPanel>
        <div className="grid grid-cols-1 gap-8 mx-2 my-10 md:grid-cols-2 lg:grid-cols-3 lg:mx-0">
            {
              touristsSpots.filter(tourSpot => tourSpot.continent === "Middle East").map((touristSpot, _id) => <CountryCard key={_id} touristSpot={touristSpot}></CountryCard>)
            }
          </div>
        </TabPanel>
        <TabPanel>
        <div className="grid grid-cols-1 gap-8 mx-2 my-10 md:grid-cols-2 lg:grid-cols-3 lg:mx-0">
            {
              touristsSpots.filter(tourSpot => tourSpot.continent === "Central Asia").map((touristSpot, _id) => <CountryCard key={_id} touristSpot={touristSpot}></CountryCard>)
            }
          </div>
        </TabPanel>
      </div>
    </Tabs>
  );
};

export default TabsCategories;
