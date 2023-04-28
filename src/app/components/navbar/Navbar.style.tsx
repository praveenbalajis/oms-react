import styled from "styled-components";

const NavbarShadow = styled.nav`
    -webkit-box-shadow: rgb(151 151 151) 0px 2px 0px 0px;
    -moz-box-shadow: rgb(151 151 151) 0px 2px 0px 0px;
    box-shadow: rgb(151 151 151) 0px 2px 0px 0px;
`;

export const NavbarContainer = styled(NavbarShadow)`
    width: 100%;
    background-color: white;
    height: 80px;
    display: flex;
    transition: 400ms;
    position: sticky;
`;

export const NavbarElementsContainer = styled.ul`
    flex-grow: 1;
    display: flex;
    flex-direction: row;
    margin: 0px 10px;
    padding: 10px;
    list-style-type: none;
    justify-content: center;
`;

export const LogoImg = styled.img`
    width: 185px;
    transition: 400ms;
`;
