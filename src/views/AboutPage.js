import ImageTag from "../components/About/ImageTag";
import Divider from "../components/About/Divider";
import StdNav from "../components/Navbar/StdNav";

const aboutMe = " Hi I'm Dan and this is my site";

function AboutPage() {
    return (
        <>
          <ImageTag src="https://www.albany.edu/communicationsmarketing/files/logo-files/Split%20A/Primary_Split_A_2020_RGB.png" text={aboutMe}/>
          <Divider/>
          <ImageTag src="https://www.albany.edu/communicationsmarketing/files/logo-files/Split%20A/Primary_Split_A_2020_RGB.png"/>
          <Divider/>
          <ImageTag src="https://upload.wikimedia.org/wikipedia/en/4/4b/Marist_College_Seal_-_Vector.svg"/>
        </>
        );
  }
  
export default AboutPage;
  