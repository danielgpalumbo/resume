import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import StdNavLink from './StdNavLink';
import MiniNav from './MiniNav'

import './StdNav.css';

function StdNav() {
  if(window.innerWidth > 640){
    return (
        <Navbar bg="dark" fixed="top" className="nav">
            <Container>
                <Navbar.Brand href="/">
                    <h3 className="brand">
                        Daniel Palumbo
                    </h3>
                </Navbar.Brand>
            </Container>
            <Container>
                <StdNavLink/>
            </Container>
        </Navbar>
    );
  }
  else {
    return (
        <MiniNav/>
    );
  }
}

export default StdNav;
