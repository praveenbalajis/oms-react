import { Row } from "react-bootstrap";
import styled from "styled-components";

export const StSectionContent = styled(Row) <{ $justifyContent: string }>`
    padding: 3rem 3rem 2rem;
    justify-content: ${({ $justifyContent }) => $justifyContent || 'Start'};
`;
