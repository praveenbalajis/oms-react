import Jumbotron from "../../components/jumbotron/Jumbotron";
import { CardContainer, CardItem, HomeSection, SectionSubTitle, SectionTitle, SectionContainer, TitleContainer, SectionText } from "./Home.style";


const Home = (props: any) => (
    <>
        <Jumbotron />
        <HomeSection>
            <SectionContainer>
                <TitleContainer>
                    <SectionTitle>
                        Little bit about me
                    </SectionTitle>
                </TitleContainer>
                <SectionText>
                    I am Praveen Balaji S, a Full Stack Developer with 3+ years of experience in Web and Mobile App Development.
                    My area of expertise lies in building enterprise applications that are scalable, responsive and dynamic.
                    I am well-versed in Angular, ReactJs, NodeJs, SQL (PostgreSQL, MySQL and MS Server).
                </SectionText>
                <SectionText>
                    This SPA is built using ReactJs, Styled-Components
                </SectionText>
            </SectionContainer>
            <SectionContainer>
                <TitleContainer>
                    <SectionTitle>
                        Welcome to the Playground
                    </SectionTitle>
                    <SectionSubTitle>
                        Select one of the apps to play with
                    </SectionSubTitle>
                </TitleContainer>
                <CardContainer>
                    <CardItem>
                        To do lists
                    </CardItem>
                    <CardItem>
                        To do lists
                    </CardItem>
                    <CardItem>
                        To do lists
                    </CardItem>
                    <CardItem>
                        To do lists
                    </CardItem>
                    <CardItem>
                        Messenger - kafka
                    </CardItem>
                </CardContainer>
            </SectionContainer>
        </HomeSection>
    </>
);

export default Home;