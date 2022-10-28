import Container from 'react-bootstrap/esm/Container';

function Desc(props) {
    return (
        <>
            <Container>
                <p style={{padding: 20}}>{props.text}</p>
            </Container>
        </>
    );
  }
  
  export default Desc;