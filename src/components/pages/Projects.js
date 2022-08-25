import Row from "react-bootstrap/Row";
import React, { useState, useLayoutEffect } from "react";
import { CheckBox } from "react-native";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Button } from "../Button";
import ProjectList from "../ProjectList";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#00693e",
    },
  },
});

const AllProjectList = [
  {
    id: "diy_wind_turbine",
    src: "Wind_Turbine_Step_6.jpg",
    title: "DIY Wind Turbine",
    blurb:
      "Ever wanted to harness the power of wind? Build your own wind turbine in this project!",
    difficulty: "Medium",
    duration: 1,
    cost: "40",
  },
  {
    id: "power_of_water",
    src: "The_Power_of_Water_Step_9.JPG",
    title: "The Power of Water",
    blurb: "Explore the mechanisms behind real water turbines in this project!",
    difficulty: "Easy",
    duration: 1,
    cost: "20",
  },
  {
    id: "water_cycle",
    src: "Water_Cycle_Step_5.jpg",
    title: "The Water Cycle",
    blurb: "Explore the mechanisms behind real water turbines in this project!",
    difficulty: "Easy",
    duration: 2,
    cost: "5",
  },
  {
    id: "solar_car",
    src: "Solar_Car_Step_20.jpg",
    title: "Solar Powered Car",
    blurb: "Explore the mechanisms behind real water turbines in this project!",
    difficulty: "Hard",
    duration: 4,
    cost: "40",
  },
];

function Projects() {
  const [DisplayedProjectList, setProjectList] = useState([...AllProjectList]);

  const [isSelectedEasy, setSelectionEasy] = useState(true);
  const [isSelectedMedium, setSelectionMedium] = useState(true);
  const [isSelectedHard, setSelectionHard] = useState(true);

  let timeSliderValue = 10;
  function timeValuetext(value) {
    timeSliderValue = value;
    return `${value} hours`;
  }

  let costSliderValue = 100;
  function costValuetext(value) {
    costSliderValue = value;
    return `${value} dollars`;
  }

  function filterProjects() {
    setProjectList(
      AllProjectList.filter(
        (task) =>
          ((task.difficulty.localeCompare("Easy") === 0) & isSelectedEasy) |
          ((task.difficulty.localeCompare("Medium") === 0) & isSelectedMedium) |
          ((task.difficulty.localeCompare("Hard") === 0) & isSelectedHard)
      )
        .filter((task) => task.duration <= timeSliderValue)
        .filter((task) => task.cost <= costSliderValue)
    );
  }

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="projects-main-div">
      <div className="projects__list__explain__div">
        <h1 className="projects__explain__text">Projects</h1>
        <h2 className="projects__explain__small__text">
          Go beyond the classroom! Learn the physics behind nature with your own
          hands.
        </h2>
        <div className="projects_filter_container">
          <div className="projects-filter-div">
            <ThemeProvider theme={theme}>
              <div className="projects-checkbox-text">Difficulty</div>
              <Row className="projects-checkbox">
                <CheckBox
                  value={isSelectedEasy}
                  onValueChange={setSelectionEasy}
                  style={{
                    width: 18,
                    height: 18,
                  }}
                />
                <div className="projects-checkbox-small-text projects-checkbox-right">
                  Easy
                </div>
              </Row>
              <Row className="projects-checkbox">
                <CheckBox
                  value={isSelectedMedium}
                  onValueChange={setSelectionMedium}
                  style={{
                    width: 18,
                    height: 18,
                  }}
                />
                <div className="projects-checkbox-small-text projects-checkbox-right">
                  Medium
                </div>
              </Row>
              <Row className="projects-checkbox">
                <CheckBox
                  value={isSelectedHard}
                  onValueChange={setSelectionHard}
                  style={{
                    width: 18,
                    height: 18,
                  }}
                />
                <div className="projects-checkbox-small-text projects-checkbox-right">
                  Hard
                </div>
              </Row>
              <div className="projects-checkbox-text">Time Needed</div>

              <Row className="projects-checkbox">
                <Box sx={{ width: 230 }}>
                  <Slider
                    defaultValue={10}
                    valueLabelDisplay="auto"
                    getAriaValueText={timeValuetext}
                    step={1}
                    marks={false}
                    min={1}
                    max={10}
                    color="primary"
                  />
                </Box>
              </Row>
              <div className="projects-checkbox-text">Estimated Cost</div>

              <Row className="projects-checkbox">
                <Box sx={{ width: 230 }}>
                  <Slider
                    defaultValue={100}
                    valueLabelDisplay="auto"
                    getAriaValueText={costValuetext}
                    step={5}
                    marks={false}
                    min={0}
                    max={100}
                    color="primary"
                  />
                </Box>
              </Row>
              <Row className="projects-checkbox projects-btn-bottom">
                <Button buttonStyle="btn--outline" onClick={filterProjects}>
                  Apply
                </Button>
              </Row>
            </ThemeProvider>
          </div>
        </div>
      </div>
      <div className="projects-list-main-div">
        <ProjectList projects={DisplayedProjectList} />
      </div>
    </div>
  );
}

export default Projects;
