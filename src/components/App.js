import StdNav from './Navbar/StdNav.js';
import Container from 'react-bootstrap/esm/Container';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from '../views/HomePage.js';
import AboutPage from '../views/AboutPage.js';
import ProjectsPage from '../views/ProjectsPage.js';

import './App.css';

function App() {
  return (
    <>
      <div className= "app">
          <StdNav/>
      <div className="content">
      <Container>
        <Router>
            <Routes>
              <Route path="/" caseSensitive="false" element={<HomePage/>}/>
              <Route path="/About" caseSensitive="false" element={<AboutPage/>}/>
              <Route path="/Projects" caseSensitive="false" element={<ProjectsPage/>}/>
            </Routes>
          </Router>
        </Container>
        </div>
        </div>
      </>
  );
}

export default App;
