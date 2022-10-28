import Container from "react-bootstrap/esm/Container";
import Curriculum from "../components/CourseWork/Curriculum"
import data from "../data/Marist.json";

const classes = data.courses;

const classList = classes.map((classes) => 
  <li>{classes}</li>
);

function MaristCourseWorkPage() {
    return (
      <>
        <Container>
          <Curriculum classes={classList}/>
        </Container>
      </>
    );
  }
  
export default MaristCourseWorkPage;