import { NavLink } from "react-router-dom";
import { LogoImg, NavbarContainer, NavbarElementsContainer } from "./Navbar.style";

const Navbar = (props: any) => {
    return (
        <NavbarContainer id="navbar">
            <NavLink to="/home">
                <LogoImg id="logo" src="/pics/logo1.png" alt="logo_img" />
            </NavLink>
            <NavbarElementsContainer>
            </NavbarElementsContainer>
        </NavbarContainer>
    );
}

export default Navbar;
