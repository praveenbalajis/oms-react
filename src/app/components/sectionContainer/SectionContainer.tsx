import { StSectionContainer } from "./SectionContainer.style";

const SectionContainer = ({ children, ...otherProps }: any) => (
    <StSectionContainer>
        {children}
    </StSectionContainer>
);

export default SectionContainer;