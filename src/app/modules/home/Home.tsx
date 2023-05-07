import Jumbotron from "../../components/jumbotron/Jumbotron";
import AboutMe from "../aboutMe/AboutMe";
import Skills from "../skills/Skills";
import { StHomeSection } from "./Home.style";

const Home = (props: any) => {
    return (
        <StHomeSection>
            <Jumbotron />
            <AboutMe />
            <Skills />
        </StHomeSection>
    );
};

export default Home;