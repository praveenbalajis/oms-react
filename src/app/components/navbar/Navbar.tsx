import { NavLink } from "react-router-dom";
import { StLogoImg, StNavbarContainer, StNavbarElementsContainer } from "./Navbar.style";

const Navbar = (props: any) => {
    return (
        <StNavbarContainer id="navbar">
            <NavLink to="/home">
                <StLogoImg id="logo" src="/pics/logo1.png" alt="logo_img" />
            </NavLink>
            <StNavbarElementsContainer>
            </StNavbarElementsContainer>
        </StNavbarContainer>
    );
}

export default Navbar;
