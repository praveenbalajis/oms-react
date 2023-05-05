import { StSectionText } from "../../../Index.style";
import SectionHeader from "../../components/sectionHeader/SectionHeader";
import { AboutMeSection } from "./AboutMe.style";

const AboutMe = (props: any) => {
    let numOfYrsOfExp = new Date().getFullYear() - 2020;
    return (
        <AboutMeSection>
            <SectionHeader header={"About me"} />
            <StSectionText>
                {/* Hello. I am Praveen Balaji, a Full Stack Developer with 3+ years of experience in Web and Mobile App Development.
                    My area of expertise lies in building enterprise applications that are scalable, responsive and dynamic.
                    I am well-versed in Angular, ReactJs, NodeJs, SQL (PostgreSQL, MySQL and MS Server). */}

                Hello. I am Full Stack Developer with {numOfYrsOfExp}+ years of experience in web and mobile app development.
                I am skilled in building enterprise applications that are dynamic with a beautiful theme-oriented, responsive and robust user interface and scalable service.
                My priority while developing an application is to use the best practices and appropriate design patterns so that the code is extensible and easy to maintain and understand.
                <br />
                <br />I have had the opportunity of developing complex applications at NSEIT for a variety of reputed clients. The projects I have worked on include a full-fledged stock exchange for a South Asian Country, an ETL for a general insurance company and many more.
                Currently, I am working on building a portfolio, sharing and learning new concepts. I am especially interested in the various patterns of micro-services and micro-frontends using single-spa and Module Federation and using multiple frameworks in the same application.

                {/* I am very much in awe as to how the online community is so strong and helpful when it comes to software development, so I am hoping to build a portfolio where I start sharing some of the concepts I have learned over the past years. */}

            </StSectionText>
        </AboutMeSection>
    );
}

export default AboutMe;