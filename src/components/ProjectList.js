import PanelItem from "./PanelItem";
import Row from "react-bootstrap/Row";

const ProjectList = ({ projects }) => {
  return (
    <div>
      {projects.map((project) => (
        <Row key={project.id}>
          <PanelItem
            id={project.id}
            src={project.src}
            path={project.path}
            title={project.title}
            blurb={project.blurb}
            difficulty={project.difficulty}
            duration={project.duration}
            cost={project.cost}
          />
        </Row>
      ))}
    </div>
  );
};

export default ProjectList;
