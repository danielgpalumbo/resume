import Nav from 'react-bootstrap/Nav';

import './StdNavLink.css';

function StdNavLink() {
  return (
    <div className="StdNavLink">
        <Nav>
            <Nav.Item>
                <Nav.Link href="/About"><h5 className="link">About</h5></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link disabled="true"><h5 className="nav-spacer">-</h5></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/Projects"><h5 className="link">Projects</h5></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link disabled="true"><h5 className="nav-spacer">-</h5></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="https://drive.google.com/file/d/1Sq1FYCE5bT53XccpKByct3vwtTSKg-iC/view?usp=sharing" target="_blank"><h5 className="link">Resume</h5></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link disabled="true"><h5 className="nav-spacer">-</h5></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="https://www.linkedin.com/in/daniel-palumbo-449020134/" target="_blank"><h5 className="link">LinkedIn</h5></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link disabled="true"><h5 className="nav-spacer">-</h5></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="https://github.com/danielgpalumbo" target="_blank"><h5 className="link">Github</h5></Nav.Link>
            </Nav.Item>
        </Nav>
    </div>
  );
}

export default StdNavLink;
