import ResponsiveNav from '../components/Navbar/ResponsiveNav'
import Container from 'react-bootstrap/esm/Container';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import BioPage from '../views/BioPage.js';
import ProjectsPage from '../views/ProjectsPage.js';
import AlbanyCourseWorkPage from '../views/AlbanyCourseWorkPage.js';
import MaristCourseWorkPage from '../views/MaristCourseWorkPage.js';

import './App.css';

function App() {
  return (
      <div className= "app">
          <ResponsiveNav/>
      <div className="content">
      <Container>
        <Router>
            <Routes>
              <Route path="/" caseSensitive="false" element={<BioPage/>}/>
              <Route path="/Bio" caseSensitive="false" element={<BioPage/>}/>
              <Route path="/Projects" caseSensitive="false" element={<ProjectsPage/>}/>
              <Route path="/MaristCourseWork" caseSensitive="false" element={<MaristCourseWorkPage/>}/>
              <Route path="/AlbanyCourseWork" caseSensitive="false" element={<AlbanyCourseWorkPage/>}/>
            </Routes>
          </Router>
        </Container>
        </div>
        </div>
  );
}

export default App;
