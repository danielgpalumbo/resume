import Navbar from 'react-bootstrap/Navbar';
import MiniNavLink from './MiniNavLink';
import Nav from 'react-bootstrap/Nav';

import './MiniNav.css'


function MiniNav() {
    return (
        <Navbar collapseOnSelect bg="dark" expand="lg" >
            <Navbar.Brand href="/">
                <h3 className="brand">
                        Daniel Palumbo
                </h3>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Nav className="mr-auto d-block">
                    <Nav.Item>
                        <MiniNavLink/>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
  }
  
  export default MiniNav;