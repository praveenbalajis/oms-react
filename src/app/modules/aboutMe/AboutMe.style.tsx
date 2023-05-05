import styled from "styled-components";
import SectionContainer from "../../components/sectionContainer/SectionContainer";
import { Col } from "react-bootstrap";

export const StAboutMeSection = styled(SectionContainer)``;

export const StAboutMeTextContainer = styled(Col).attrs({
    xs: 12,
    md: 8,
})`
    padding: 2.5rem;
`;

export const StPictureContainer = styled(Col).attrs({
    xs: 12,
    md: 4,
})`
    padding: 6rem 4rem 0rem 1rem;
    position: relative;
`;

const StPicture = styled.img`
    height: 450px;
    object-fit: cover;
    object-position: 0% 20%;
    position: absolute;
    border-radius: 20px;
`;

export const StPictureImage = styled(StPicture)`
    z-index: 2;
    width: 345px;
    margin: auto;
    left: 10px;
    top: 90px;
    filter: opacity(90%);
    transition: transform 100ms;
    &:hover {
        transform: scale(1.05);
    }
`;

export const StPictureImageShadow = styled(StPicture)`
    z-index: 1;
    width: 350px;
    filter: saturate(150%) blur(10px);
`;
