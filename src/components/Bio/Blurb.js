import Container from 'react-bootstrap/esm/Container';
import { Link } from 'react-router-dom';
import './Blurb.css';

function Blurb(props) {
    return (
        <>
            <Container>
                <h1>{props.school}</h1>
                <ul className="dash">
                    <li>- {props.major}</li>
                    <li>- {props.concentration}</li>
                    <li>- {props.acheivements}</li>
                    <li>- {props.gpa}</li>
                </ul>
                <h5 className='italic-heading5'>{props.grad}</h5>
                <Link to={props.courseWorkUrl}><h5>{props.courseWork}</h5></Link>
            </Container>
        </>
    );
  }
  
  export default Blurb;