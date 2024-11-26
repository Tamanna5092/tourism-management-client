import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import CountryCard from "./CountryCard";

const TabsCategories = () => {
  return (
    <Tabs>
      <div className="my-10 max-w-7xl mx-auto">
        <h1 className="font-lato text-center text-4xl font-bold">Go Exotic Places</h1>
        <p className="text-center mt-4">
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
          <h2>
            <CountryCard></CountryCard>
          </h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 3</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 4</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 5</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 6</h2>
        </TabPanel>
      </div>
    </Tabs>
  );
};

export default TabsCategories;
