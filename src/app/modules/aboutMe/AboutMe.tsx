import { StSectionText } from "../../../Index.style";
import SectionHeader from "../../components/sectionHeader/SectionHeader";
import { StAboutMeSection, StAboutMeTextContainer, StPictureContainer, StPictureImage, StPictureImageShadow } from "./AboutMe.style";
import SectionContent from "../../components/sectionContent/SectionContent";

const AboutMe = (props: any) => {
    let numOfYrsOfExp = new Date().getFullYear() - 2020;
    return (
        <StAboutMeSection>
            <SectionHeader header={"About me"} />
            <SectionContent>
                <StAboutMeTextContainer>
                    <StSectionText>
                        <ul>
                            <li>Hello. I am Praveen Balaji, a Full Stack Developer with {numOfYrsOfExp}+ years of experience in Web and Mobile Application Development.</li>
                            <li> I am skilled in building highly customizable, data-driven interfaces enterprise applications that are dynamic with a beautiful theme-oriented, responsive and robust user interface and scalable backend services. This helps me to develop enterprise applications that leverage user data to create personalized experiences and provide real-time insights.</li>
                            <li>By utilizing industry-standard design patterns and best practices, I ensure that the code is not only extensible and easy to maintain but also has higher performance, better security, and is more scalable.</li>
                            <li> I have developed complex applications at NSEIT for a variety of reputed clients. The projects I have worked on include a full-fledged stock exchange for an ASEAN member state, an ETL for a general insurance company, document verification application for a government entity and then few more.</li>
                            <li>Currently, I am working on building my portfolio and learning new concepts. I am especially interested in improving my knowledge in micro-services and micro-frontends using single-spa and Module Federation and using multiple frameworks in the same application.</li>
                        </ul>
                        {/* Hello. I am Praveen Balaji, a Full Stack Developer with {numOfYrsOfExp}+ years of experience in Web and Mobile Application Development.
                        I am skilled in building highly customizable, data-driven interfaces enterprise applications that are dynamic with a beautiful theme-oriented, responsive and robust user interface and scalable backend services. This helps me to develop enterprise applications that leverage user data to create personalized experiences and provide real-time insights. By utilizing industry-standard design patterns and best practices, I ensure that the code is not only extensible and easy to maintain but also has higher performance, better security, and is more scalable.
                        <br />
                        <br />
                        I have developed complex applications at NSEIT for a variety of reputed clients. The projects I have worked on include a full-fledged stock exchange for an ASEAN member state, an ETL for a general insurance company, document verification application for a government entity and then few more.
                        <br />
                        <br />
                        Currently, I am working on building my portfolio and learning new concepts. I am especially interested in improving my knowledge in micro-services and micro-frontends using single-spa and Module Federation and using multiple frameworks in the same application. */}
                    </StSectionText>
                </StAboutMeTextContainer>
                <StPictureContainer>
                    <StPictureImageShadow src="/pics/me_1.jpg" alt="My Face" />
                    <StPictureImage src="/pics/me_1.jpg" alt="My Face" />
                </StPictureContainer>
            </SectionContent>
        </StAboutMeSection>
    );
}

export default AboutMe;