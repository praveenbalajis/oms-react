import { Row } from "react-bootstrap";
import { StSectionText } from "../../../Index.style";
import SectionHeader from "../../components/sectionHeader/SectionHeader";
import { StAboutMeSection, StAboutMeTextContainer, StPictureContainer, StPictureImage, StPictureImageShadow } from "./AboutMe.style";

const AboutMe = (props: any) => {
    let numOfYrsOfExp = new Date().getFullYear() - 2020;
    return (
        <StAboutMeSection>
            <SectionHeader header={"About me"} />
            <Row>
                <StAboutMeTextContainer>
                    <StSectionText>
                        Hello. I am Praveen Balaji, a Full Stack Developer with {numOfYrsOfExp}+ years of experience in Web and Mobile App Development.
                        I am skilled in building enterprise applications that are dynamic with a beautiful theme-oriented, responsive and robust user interface and scalable backend services. My priority while developing an application is to use the best practices and appropriate design patterns so that the code is extensible and easy to maintain and understand.
                        <br />
                        <br />
                        I have had the opportunity of developing complex applications at NSEIT for a variety of reputed clients. The projects I have worked on include a full-fledged stock exchange for a South Asian Country, an ETL for a general insurance company and many more.
                        <br />
                        <br />
                        Currently, I am working on building my portfolio and learning new concepts. I am especially interested in improving my knowledge in micro-services and micro-frontends using single-spa and Module Federation and using multiple frameworks in the same application.
                    </StSectionText>
                </StAboutMeTextContainer>
                <StPictureContainer>
                    <StPictureImageShadow src="/pics/me_1.jpg" alt="My Face" />
                    <StPictureImage src="/pics/me_1.jpg" alt="My Face" />
                </StPictureContainer>
            </Row>
        </StAboutMeSection>
    );
}

export default AboutMe;