import Container from "react-bootstrap/esm/Container";

function CourseWorkPage(props) {
    return (
      <>
        <Container>
          <ul>
              {props.classes}
          </ul>
        </Container>
      </>
    );
  }
  
export default CourseWorkPage;