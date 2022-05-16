import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/esm/Container';

function ImageTag(props) {
    return (
        <>
            <Container>
                <div class="row">
                    <div class="col text-center">
                        <Image fluid="true" style={{width: 300}} className="pic"  src={props.src}/>
                    </div>
                    <div class="col my-auto">
                        <p>{props.text}</p>
                    </div>
                </div>
            </Container>
        </>
    );
  }
  
  export default ImageTag;
  