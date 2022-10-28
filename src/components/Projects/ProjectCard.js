import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './ProjectCard.css'
import Placeholder from 'react-bootstrap/Placeholder';

function CardExample(props) {
  return (
    <div className="d-flex justify-content-around">
      <Card style={{ width: '18rem' }}>
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
  );
}

export default CardExample;