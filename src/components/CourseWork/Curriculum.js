import Container from "react-bootstrap/esm/Container";
import "./Curriculum.css"

function CourseWorkPage(props) {
    return (
      <>
        <Container className="center">
          <ul>
              {props.classes}
          </ul>
        </Container>
      </>
    );
  }
  
export default CourseWorkPage;