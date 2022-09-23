import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";
import Blogs from "./components/pages/Blogs";
import About from "./components/pages/About";
import JoinUs from "./components/pages/JoinUs";
import {
  ProjectDIYWindTurbine,
  ProjectPowerofWater,
  ProjectWaterCycle,
  ProjectSolarCar,
  ProjectWKOWATME,
  ProjectGreenhouseEffect,
  BlogFlowerTurbine,
  BlogWorkshopTroop10,
} from "./components/pages/Content.js";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/about" element={<About />} />
          <Route path="/joinus" element={<JoinUs />} />
          <Route
            path="/projects/diy_wind_turbine"
            element={<ProjectDIYWindTurbine />}
          />
          <Route
            path="/projects/power_of_water"
            element={<ProjectPowerofWater />}
          />
          <Route path="/projects/water_cycle" element={<ProjectWaterCycle />} />
          <Route path="/projects/solar_car" element={<ProjectSolarCar />} />
          <Route
            path="/projects/what_kind_of_windows"
            element={<ProjectWKOWATME />}
          />
          <Route
            path="/projects/greenhouse_effect"
            element={<ProjectGreenhouseEffect />}
          />
          <Route path="/blogs/flower_turbine" element={<BlogFlowerTurbine />} />
          <Route
            path="/blogs/workshop_troop_10"
            element={<BlogWorkshopTroop10 />}
          />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
