import Container from 'react-bootstrap/esm/Container';
import ProjectCard from '../components/Projects/ProjectCard';
import ResProjectImage from '../data/resProject.png';
import IoT from '../data/IoT.png'


function ProjectsPage() {
    return (
      <div className="projectsPage">
        <Container>
          <ProjectCard 
            link="https://github.com/danielgpalumbo/resume"
            imgSrc={ResProjectImage} 
            Title="Resume React App"
            Text ="This is the repo for the current website you are viewing built with React and Bootstap"
            />
        </Container>
        <Container>
          <ProjectCard 
            link=""
            imgSrc={IoT}
            
          />
        </Container>
      </div>
    );
  }
  
  export default ProjectsPage;
  