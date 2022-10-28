import Container from "react-bootstrap/esm/Container";
import Curriculum from "../components/CourseWork/Curriculum";
import data from "../data/Albany.json";
//Delete one of these to make just a coursework page
const classes = data.courses;

const classList = classes.map((classes) => 
  <li>{classes}</li>
);

function AlbanyCourseWorkPage() {
    return (
      <>
        <Container>
          <Curriculum classes={classList}/>
        </Container>
      </>
    );
  }
  
export default AlbanyCourseWorkPage;