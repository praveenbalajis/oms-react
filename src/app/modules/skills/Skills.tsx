import { Row } from "react-bootstrap";
import SectionHeader from "../../components/sectionHeader/SectionHeader";
import { StSkillsSection } from "./Skills.style";

const Skills = (props: any) => {
    return (
        <StSkillsSection>
            <SectionHeader header={"My Skills"} />
            <Row>
            </Row>
        </StSkillsSection>
    );
}

export default Skills;