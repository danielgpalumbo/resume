import ImageTag from "../components/Bio/ImageTag";
import Divider from "../components/Bio/Divider";
import Blurb from "../components/Bio/Blurb";
import Desc from "../components/Bio/Desc";
import avi from  "../avi.png";


function BioPage() {
    return (
        <>
          <ImageTag 
            src={avi}
            blurb={
              <Desc
                text="I am a technologically savvy, hard-working, adaptable individual with a keen interest in scientific development. 
                I'm highly skilled in time management and organization, and add value to everything that I do. I have an extensive background
                in Project Management from my time at Taconic Biosciences."
            />}
          />
          <Divider/>
          <ImageTag src="https://www.albany.edu/communicationsmarketing/files/logo-files/Split%20A/Primary_Split_A_2020_RGB.png"
              blurb={
                <Blurb school="University at Albany" 
                  major="Bachelor's of Science in Chemistry" 
                  concentration="Concentration in Biochemistry"
                  acheivements="Phi Beta Kappa, Summa Cum Laude, ACS Certified, Theta Delta Chi"
                  gpa="GPA: 3.51"
                  grad="Graduated May 2017"
                  courseWorkUrl="/AlbanyCourseWork"
                  courseWork="Albany Course Work"
                />
              }
          />
          <Divider/>
          <ImageTag src="https://upload.wikimedia.org/wikipedia/en/4/4b/Marist_College_Seal_-_Vector.svg"
              blurb={
                <Blurb school="Marist College" 
                  major="Master's of Science in Computer Science/Software Development" 
                  concentration="Concentration in Mobile Computing"
                  acheivements="Summa Cum Laude, Capstone Project"
                  gpa="GPA: 3.64" 
                  grad="Graduated May 2022"
                  courseWorkUrl="/MaristCourseWork" 
                  courseWork="Marist Course Work"/>
              }
          />
        </>
        );
  }
  
export default BioPage;
  