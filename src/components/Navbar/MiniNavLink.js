import Nav from 'react-bootstrap/Nav';
import './MiniNavLink.css';

function MiniNavLink() {
  return (
    <div>
        <Nav>
            {/* <Nav.Item>
                <Nav.Link href="/Bio"><h5 className="link">Bio</h5></Nav.Link>
            </Nav.Item> */}
            <Nav.Item>
                <Nav.Link href="/Projects"><h5 className="link">Projects</h5></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="https://drive.google.com/file/d/14i1p2KYPlz4ApEsKP6QPTGNOEIlsIJO9/view?usp=sharing" target="_blank"><h5 className="link">Resume</h5></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="https://www.linkedin.com/in/daniel-palumbo-449020134/" target="_blank"><h5 className="link">LinkedIn</h5></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="https://github.com/danielgpalumbo" target="_blank"><h5 className="link">Github</h5></Nav.Link>
            </Nav.Item>
        </Nav>
    </div>
  );
}

export default MiniNavLink;
