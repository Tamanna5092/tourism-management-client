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
        <p className="text-[#818181] text-center mt-4 px-2 md:px-0">
          When it comes to exploring exotic places, the choices are numerous.
          Whether you like peaceful destinations or vibrant landscapes, we have
          offers for you.This beautiful destination boasts stunning landscapes,
          vibrant culture, and peaceful resorts, offering the perfect escape for
          adventure, relaxation, and unforgettable experiences for every
          traveler.
        </p>
        <div className="flex justify-center items-center my-6">
          <TabList>
            <Tab>France</Tab>
            <Tab>Italy</Tab>
            <Tab>Spain</Tab>
            <Tab>England</Tab>
            <Tab>Germany</Tab>
            <Tab>Netherlands</Tab>
            <Tab>Switzerland</Tab>
          </TabList>
        </div>

        <TabPanel>
          <div className="grid grid-cols-1 gap-8 mx-2 my-10 md:grid-cols-2 lg:grid-cols-3 lg:mx-0">
            {
              touristsSpots.filter(tourSpot => tourSpot.country === "France").map((touristSpot, _id) => <CountryCard key={_id} touristSpot={touristSpot}></CountryCard>)
            }
          </div>
        </TabPanel>
        <TabPanel>
        <div className="grid grid-cols-1 gap-8 mx-2 my-10 md:grid-cols-2 lg:grid-cols-3 lg:mx-0">
            {
              touristsSpots.filter(tourSpot => tourSpot.country === "Italy").map((touristSpot, _id) => <CountryCard key={_id} touristSpot={touristSpot}></CountryCard>)
            }
          </div>
        </TabPanel>
        <TabPanel>
        <div className="grid grid-cols-1 gap-8 mx-2 my-10 md:grid-cols-2 lg:grid-cols-3 lg:mx-0">
            {
              touristsSpots.filter(tourSpot => tourSpot.country === "Spain").map((touristSpot, _id) => <CountryCard key={_id} touristSpot={touristSpot}></CountryCard>)
            }
          </div>
        </TabPanel>
        <TabPanel>
        <div className="grid grid-cols-1 gap-8 mx-2 my-10 md:grid-cols-2 lg:grid-cols-3 lg:mx-0">
            {
              touristsSpots.filter(tourSpot => tourSpot.country === "England").map((touristSpot, _id) => <CountryCard key={_id} touristSpot={touristSpot}></CountryCard>)
            }
          </div>
        </TabPanel>
        <TabPanel>
        <div className="grid grid-cols-1 gap-8 mx-2 my-10 md:grid-cols-2 lg:grid-cols-3 lg:mx-0">
            {
              touristsSpots.filter(tourSpot => tourSpot.country === "Germany").map((touristSpot, _id) => <CountryCard key={_id} touristSpot={touristSpot}></CountryCard>)
            }
          </div>
        </TabPanel>
        <TabPanel>
        <div className="grid grid-cols-1 gap-8 mx-2 my-10 md:grid-cols-2 lg:grid-cols-3 lg:mx-0">
            {
              touristsSpots.filter(tourSpot => tourSpot.country === "Netherlands").map((touristSpot, _id) => <CountryCard key={_id} touristSpot={touristSpot}></CountryCard>)
            }
          </div>
        </TabPanel>
        <TabPanel>
        <div className="grid grid-cols-1 gap-8 mx-2 my-10 md:grid-cols-2 lg:grid-cols-3 lg:mx-0">
            {
              touristsSpots.filter(tourSpot => tourSpot.country === "Switzerland").map((touristSpot, _id) => <CountryCard key={_id} touristSpot={touristSpot}></CountryCard>)
            }
          </div>
        </TabPanel>
      </div>
    </Tabs>
  );
};

export default TabsCategories;
