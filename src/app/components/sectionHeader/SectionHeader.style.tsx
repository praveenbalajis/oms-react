import styled from "styled-components";
import { StSectionFont } from "../../../Index.style";

export const StSectionHeaderContainer = styled.div`
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px 10px,
        rgb(51, 51, 51, 0.5) 0px 0px 0px 3px;
    min-width: 55%;
    max-width: fit-content;
    margin: 0 auto;
    padding: 15px 15px 5px;
`;

export const StSectionHeader = styled(StSectionFont)`
    font-size: 4.5rem;
    font-weight: 600;
`;

export const StSectionSubHeader = styled(StSectionFont)`
    font-size: 2.5rem;
    font-weight: 600;
    margin-top: 1rem;
`;
