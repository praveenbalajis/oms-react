import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import { StScrollSection } from "./Main.style";

const Main = () => {
    const scrollFunction = () => {
        const navbarElement = document.getElementById("navbar")!;
        const logoElement = document.getElementById("logo")!;
        const mainElement = document.getElementById("main")!;
        if (mainElement.scrollTop > 80) {
            navbarElement.style.height = "60px";
            logoElement.style.width = "140px";
            mainElement.style.height = "calc(100vh - 60px)"
        }
        else {
            navbarElement.style.height = "80px";
            logoElement.style.width = "185px";
            mainElement.style.height = "calc(100vh - 80px)"
        }
    }
    return (
        <>
            <Navbar />
            <StScrollSection id="main" onScroll={scrollFunction}>
                <Outlet />
            </StScrollSection>
        </>
    );
}

export default Main;