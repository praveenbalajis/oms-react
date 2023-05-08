import styled from "styled-components";

const fontFamilyForHeader = 'astronBoy'

export const StSectionFont = styled.div`
    padding: 0 3rem;
    text-align: center;
    font-family: ${fontFamilyForHeader};
    background: linear-gradient(45deg, violet, indigo, blue);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

export const StSectionText = styled.div`
    text-justify: auto;
`;

export const StCategoryHeader = styled.div`
    padding: 10px 0 5px 0;
    text-align: center;
    font-family: ${fontFamilyForHeader};
    background: linear-gradient(45deg, violet, indigo, blue);
    font-size: 28px;
    background-clip: border-box;
    -webkit-background-clip: border-box;
    -webkit-text-fill-color: white;
`;

export const StCategoryGroup = styled.ul`
    margin: 10px 0;
`;

export const StCategoryItem = styled.li``;
