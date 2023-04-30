import Jumbotron from "../../components/jumbotron/Jumbotron";
import SectionContainer from "../../components/sectionContainer/SectionContainer";
import SectionHeader from "../../components/sectionHeader/SectionHeader";
import { StCardContainer, StCardItem, StHomeSection, StSectionText } from "./Home.style";

const Home = (props: any) => (
    <>
        <Jumbotron />
        <StHomeSection>
            <SectionContainer>
                <SectionHeader header={"About me"} />
                <StSectionText>
                    Hello. I am Praveen Balaji, a Full Stack Developer with 3+ years of experience in Web and Mobile App Development.
                    My area of expertise lies in building enterprise applications that are scalable, responsive and dynamic.
                    I am well-versed in Angular, ReactJs, NodeJs, SQL (PostgreSQL, MySQL and MS Server).
                </StSectionText>
            </SectionContainer>
            <SectionContainer>
                <SectionHeader header={"Welcome to the Playground"} subHeader={"Select one of the apps to play with"} />
                <StCardContainer>
                    <StCardItem>
                        To do lists
                    </StCardItem>
                    <StCardItem>
                        To do lists
                    </StCardItem>
                    <StCardItem>
                        To do lists
                    </StCardItem>
                    <StCardItem>
                        To do lists
                    </StCardItem>
                    <StCardItem>
                        Messenger - kafka
                    </StCardItem>
                </StCardContainer>
            </SectionContainer>
        </StHomeSection>
    </>
);

export default Home;