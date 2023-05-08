import { Col } from "react-bootstrap";
import styled from "styled-components";

export const StCardItem = styled.div`
    box-shadow: rgba(111, 46, 240, 0.4) -5px 5px,
        rgba(111, 46, 240, 0.3) -10px 10px, rgba(111, 46, 240, 0.2) -15px 15px,
        rgba(111, 46, 240, 0.1) -20px 20px, rgba(111, 46, 240, 0.05) -25px 25px,
        rgb(235, 235, 235) 2px 0px 16px 4px;
    height: 100%;
`;

export const StCardWrapper = styled(Col).attrs({
    xs: 12,
    md: 6,
    lg:4
})`
    padding: 0 2rem;
    margin-bottom: 2rem;
`;
