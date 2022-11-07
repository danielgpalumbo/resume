import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './ProjectCard.css'
import Placeholder from 'react-bootstrap/Placeholder';

function CardExample(props) {
  return (
    <div className="cardHolder">
      <div className="d-flex justify-content-around" margin-top="10px">
        <Card style={{ width: '20rem' }}>
          <Card.Img variant="top" src={props.imgSrc} />
          <Card.Body>
            <Card.Title>{props.Title}</Card.Title>
            <Card.Text>
              {props.Text}
            </Card.Text>
            <Button variant="outline-secondary"><a href={props.link} target="_blank">Go to repo</a></Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default CardExample;