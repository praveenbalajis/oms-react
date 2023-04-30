import { StSectionHeader, StSectionHeaderContainer, StSectionSubHeader } from "./SectionHeader.style"

interface HeaderProps {
    header: string,
    subHeader?: string
}

const SectionHeader = (props: HeaderProps) => (
    <StSectionHeaderContainer>
        <StSectionHeader>
            {props.header}
        </StSectionHeader>
        {
            props.subHeader &&
            <StSectionSubHeader>{props.subHeader}</StSectionSubHeader>
        }
    </StSectionHeaderContainer>
);

export default SectionHeader;