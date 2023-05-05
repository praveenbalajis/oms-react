import Jumbotron from "../../components/jumbotron/Jumbotron";
import SectionContainer from "../../components/sectionContainer/SectionContainer";
import SectionHeader from "../../components/sectionHeader/SectionHeader";
import AboutMe from "../aboutMe/AboutMe";
import { StHomeSection } from "./Home.style";

const Home = (props: any) => {
    return (
        <>
            <Jumbotron />
            <StHomeSection>
                <AboutMe />

                <SectionContainer>
                    <SectionHeader header={"Welcome to the Playground"} subHeader={"Select one of the apps to play with"} />
                    {/* <StCardContainer>
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
                </StCardContainer> */}
                </SectionContainer>
            </StHomeSection>
        </>
    );
};

export default Home;