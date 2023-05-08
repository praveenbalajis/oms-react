import SectionHeader from "../../components/sectionHeader/SectionHeader";
import { StSkillsSection } from "./Skills.style";
import SectionContent from "../../components/sectionContent/SectionContent";
import Card from "../../components/card/Card";
import { StCategoryGroup, StCategoryHeader, StCategoryItem } from "../../../Index.style";

const Skills = (props: any) => {
    const skills =
        [
            {
                categoryHeader: "Languages",
                categoryItems: ["JavaScript (ES6+)", "TypeScript", "HTML", "CSS", "Java", "SQL", "Python"]
            },
            {
                categoryHeader: "Frameworks/Libraries",
                categoryItems: ["Angular", "React", "Node.js + Sequelize (ORM)", "Spring Boot + JPA", "Ionic + Cordova", "Cypress - E2E Testing"]
            },
            {
                categoryHeader: "Tools of the Trade",
                categoryItems: ["Git", "Apache Kafka", "Redis", "NGINX/Apache Server", "AWS EC2", "PM2", "Jenkins"]
            },
            {
                categoryHeader: "IDE",
                categoryItems: ["Visual Studio Code ", "IntelliJ IDEA", "XCode",]
            },
        ]
    return (
        <StSkillsSection>
            <SectionHeader header={"My Skills"} />
            <SectionContent justifyContent={'space-evenly'}>
                {
                    skills.map(({ categoryHeader, categoryItems }, index) => (
                        <Card key={index}>
                            <StCategoryHeader>{categoryHeader}</StCategoryHeader>
                            <StCategoryGroup>
                                {categoryItems.map((val, index) => (<StCategoryItem key={index}>{val}</StCategoryItem>))}
                            </StCategoryGroup>
                        </Card>
                    ))
                }
            </SectionContent>
        </StSkillsSection >
    );
}

export default Skills;