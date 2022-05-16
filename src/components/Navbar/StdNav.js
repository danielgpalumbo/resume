import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import StdNavLink from'./StdNavLink';

import './StdNav.css';

function StdNav() {
  return (
        <Navbar bg="dark" fixed="top" className = "nav">
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

export default StdNav;
