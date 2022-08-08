import Row from "react-bootstrap/Row";
import React, { useState, useLayoutEffect } from "react";
import { CheckBox } from "react-native";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Button } from "../Button";
import ProjectList from "../ProjectList";

const AllProjectList = [
  {
    id: "demo",
    src: "founder.jpeg",
    title: "Demo Project",
    blurb:
      "This is a demo project the text gets truncated after a while agagagagagagagag",
    difficulty: "Hard",
    duration: 10,
    cost: "5",
  },
  {
    id: "turbine",
    src: "founder.jpeg",
    title: "Turbine",
    blurb:
      "This is a demo project the text gets truncated after a while agagagagagagagag",
    difficulty: "Hard",
    duration: 5,
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
          Build, design, and experiment
        </h2>
        <div className="cards cards__container cards__wrapper">
          <div className="cards__item">
            <div className="projects-filter-div">
              <Row className="projects-checkbox">
                <CheckBox
                  value={isSelectedEasy}
                  onValueChange={setSelectionEasy}
                  style={{
                    width: 20,
                    height: 20,
                  }}
                />
                <div className="projects-checkbox-text">Easy</div>
              </Row>
              <Row className="projects-checkbox">
                <CheckBox
                  value={isSelectedMedium}
                  onValueChange={setSelectionMedium}
                  style={{
                    width: 20,
                    height: 20,
                  }}
                />
                <div className="projects-checkbox-text">Medium</div>
              </Row>
              <Row className="projects-checkbox">
                <CheckBox
                  value={isSelectedHard}
                  onValueChange={setSelectionHard}
                  style={{
                    width: 20,
                    height: 20,
                  }}
                />
                <div className="projects-checkbox-text">Hard</div>
              </Row>
              <Row className="projects-checkbox">
                <div className="projects-checkbox-text">Time Needed</div>

                <Box sx={{ width: 200 }}>
                  <Slider
                    defaultValue={10}
                    valueLabelDisplay="auto"
                    getAriaValueText={timeValuetext}
                    step={1}
                    marks
                    min={1}
                    max={10}
                  />
                </Box>
              </Row>
              <Row className="projects-checkbox">
                <div className="projects-checkbox-text">Supplies Cost</div>

                <Box sx={{ width: 200 }}>
                  <Slider
                    defaultValue={100}
                    valueLabelDisplay="auto"
                    getAriaValueText={costValuetext}
                    step={5}
                    marks
                    min={0}
                    max={100}
                  />
                </Box>
              </Row>
              <Row>
                <Button buttonStyle="btn--outline" onClick={filterProjects}>
                  Apply
                </Button>
              </Row>
            </div>
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
