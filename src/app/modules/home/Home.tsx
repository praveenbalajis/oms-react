import Jumbotron from "../../components/jumbotron/Jumbotron";
import { StCardContainer, StCardItem, StHomeSection, StSectionSubTitle, StSectionTitle, StSectionContainer, StTitleContainer, StSectionText } from "./Home.style";


const Home = (props: any) => (
    <>
        <Jumbotron />
        <StHomeSection>
            <StSectionContainer>
                <StTitleContainer>
                    <StSectionTitle>
                        About me
                    </StSectionTitle>
                </StTitleContainer>
                <StSectionText>
                    Hello. I am Praveen Balaji, a Full Stack Developer with 3+ years of experience in Web and Mobile App Development.
                    My area of expertise lies in building enterprise applications that are scalable, responsive and dynamic.
                    I am well-versed in Angular, ReactJs, NodeJs, SQL (PostgreSQL, MySQL and MS Server).
                </StSectionText>
            </StSectionContainer>
            <StSectionContainer>
                <StTitleContainer>
                    <StSectionTitle>
                        Welcome to the Playground
                    </StSectionTitle>
                    <StSectionSubTitle>
                        Select one of the apps to play with
                    </StSectionSubTitle>
                </StTitleContainer>
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
            </StSectionContainer>
        </StHomeSection>
    </>
);

export default Home;