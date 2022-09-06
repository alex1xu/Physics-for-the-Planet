import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
  BlogFlowerTurbine,
  BlogDemo2,
} from "./components/pages/Content.js";

function App() {
  return (
    <>
      <Router>
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
          <Route path="/blogs/flower_turbine" element={<BlogFlowerTurbine />} />
          <Route path="/blogs/demo2" element={<BlogDemo2 />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
