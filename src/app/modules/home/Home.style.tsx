import styled from "styled-components";

export const HomeSection = styled.div`
    padding: 2rem;
    margin-top: 2rem;
`;

export const SectionContainer = styled.section`
    background-color: #ffffff;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
        rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
        rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    padding: 2rem 1rem;
    margin-bottom: 4rem;
`;

export const TitleContainer = styled.div`
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px 10px,
        rgb(51, 51, 51, 0.5) 0px 0px 0px 3px;
    max-width: 55%;
    margin: 0 auto;
    padding: 15px;
`;

const SectionFont = styled.div`
    padding: 0 3rem;
    text-align: center;
    font-family: astronBoy;
    background: linear-gradient(45deg, violet, indigo, blue);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

export const SectionTitle = styled(SectionFont)`
    font-size: 4.5rem;
    font-weight: 600;
`;

export const SectionSubTitle = styled(SectionFont)`
    font-size: 2.5rem;
    font-weight: 600;
    margin-top: 1rem;
`;

export const SectionText = styled.p`
    font-family: "Droid Sans";
    padding: 2rem 10rem;
    font-size: 1.75rem;
    /* text-align: center; */
    text-justify: auto;
`;

export const CardContainer = styled.div`
    margin-top: 3rem;
    padding: 2rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
`;

export const CardItem = styled.div`
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
