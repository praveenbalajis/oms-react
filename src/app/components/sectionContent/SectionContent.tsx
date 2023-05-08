import { PropsWithChildren } from "react";
import { StSectionContent } from "./SectionContent.style";

interface SectionContentProps extends PropsWithChildren {
    justifyContent?: string
}

const SectionContent = (props: SectionContentProps) => (
    <StSectionContent $justifyContent={props.justifyContent}>
        {props.children}
    </StSectionContent>
);

export default SectionContent;