"use client";

import { Suspense } from "react";
import styles from "./TabMenu.module.css";
import { ViewTouristAttractions } from "app/components/ViewTouristAttractions";
import { ViewAirportsbyRegion } from "app/components/ViewAirportsbyRegion";
import { ViewAirports } from "app/components/ViewAirports";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { ViewPresidents } from "../ViewPresidents";

export const TabMenu = () => {
  return (
    <div className={styles.modal}>
      <div className={styles.tabs}>
        <Tabs className="tabs">
          <TabList className="tab-list">
            <Tab>ViewPresidents</Tab>
            <Tab>ViewTouristAttractions</Tab>
            <Tab>ViewAirports</Tab>
            <Tab>ViewAirportsbyRegion</Tab>
          </TabList>
          <TabPanel id="tab-content" className="tabcontent">
            <Suspense fallback={<div>Cargando presidents...</div>}>
              <ViewPresidents />
            </Suspense>
          </TabPanel>
          <TabPanel id="tab-content" className="tabcontent">
            <Suspense fallback={<div>Cargando tourist attractions...</div>}>
              <ViewTouristAttractions />
            </Suspense>
          </TabPanel>
          <TabPanel id="tab-content" className="tabcontent">
            <Suspense fallback={<div>Cargando aeropuertos...</div>}>
              <ViewAirports />
            </Suspense>
          </TabPanel>
          <TabPanel id="tab-content" className="tabcontent">
            <Suspense fallback={<div>Cargando aeropuertos...</div>}>
              <ViewAirportsbyRegion />
            </Suspense>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};
