import styled from "styled-components";

export const StJumbotronContainer = styled.section`
    width: 100vw;
    position: relative;
    left: calc(-50vw + 50%);
`;

export const StJumbotronImage = styled.img`
    width: 100%;
    height: calc(100vh - 80px);
    object-fit: cover;
    object-position: 40% 50%;
`;