import styled from "styled-components";

export const StHomeSection = styled.div`
    padding: 2rem;
    margin-top: 2rem;
`;

export const StSectionText = styled.p`
    font-family: "Droid Sans";
    padding: 2rem 10rem;
    font-size: 1.75rem;
    /* text-align: center; */
    text-justify: auto;
`;

export const StCardContainer = styled.div`
    margin-top: 3rem;
    padding: 2rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
`;

export const StCardItem = styled.div`
    width: 26%;
    min-height: 250px;
    background-color: white;
    border: 1px solid #ebebeb;
    box-shadow: rgba(111, 46, 240, 0.4) -5px 5px,
        rgba(111, 46, 240, 0.3) -10px 10px, rgba(111, 46, 240, 0.2) -15px 15px,
        rgba(111, 46, 240, 0.1) -20px 20px, rgba(111, 46, 240, 0.05) -25px 25px;
    padding: 2rem;
    margin-bottom: 5rem;
`;
