import styled from "styled-components";
import SectionContainer from "../../components/sectionContainer/SectionContainer";
import { Col } from "react-bootstrap";

export const StAboutMeSection = styled(SectionContainer)``;

export const StAboutMeTextContainer = styled(Col).attrs({
    xs: 12,
    md: 8,
})`
    padding-right: 3rem;
`;

export const StPictureContainer = styled(Col).attrs({
    xs: 12,
    md: 4,
})`
    padding: 2rem 0rem;
    position: relative;
`;

const StPicture = styled.img`
    height: 80%;
    object-fit: cover;
    object-position: 0% 20%;
    position: absolute;
    border-radius: 20px;
`;

export const StPictureImage = styled(StPicture)`
    z-index: 2;
    width: 345px;
    margin: auto;
    top: 20px;
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
