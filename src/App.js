import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";
import Blogs from "./components/pages/Blogs";
import About from "./components/pages/About";
import {
  ProjectDIYWindTurbine,
  BlogDemo,
  ProjectPowerofWater,
  ProjectWaterCycle,
  ProjectSolarCar,
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
          <Route path="/blogs/demo" element={<BlogDemo />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
