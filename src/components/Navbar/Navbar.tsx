import logo from '../../assets/logo.svg';
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import NavbarContext from "../../context/NavbarContext";
import "./Navbar.scss";
import SocialMedia from "../SocialMedia/SocialMedia";

const Navbar = () => {
    const { setNavbarContext } = useContext(NavbarContext);

    const navigate = useNavigate();
    const GoHome = () => {
        navigate("/");
    }

    const translateNavbar = (value: string) => {
        switch (value) {
            case "Sobre mim":
                return "About Me"
            case "Skills":
                return "Skill"
            case "Portfólio":
                return "Work"
            default:
                return value;
        }
    }

    const handleClickNav = (value: string) => {
        const translatedWord = translateNavbar(value);
        setNavbarContext(translatedWord);
    }

    return (
        <div id="navbar">
            <div className="navbar-options">
                <img src={logo} className="logo" alt="logo" onClick={GoHome} />
                <a href="#home" onClick={(e) => handleClickNav(e.currentTarget.textContent!)}>Home</a>
                <a href="#about" onClick={(e) => handleClickNav(e.currentTarget.textContent!)}>Sobre mim</a>
                <a href="#portfolio" onClick={(e) => handleClickNav(e.currentTarget.textContent!)}>Portfólio</a>
                <a href="#skills" onClick={(e) => handleClickNav(e.currentTarget.textContent!)}>Skills</a>
            </div>
            <div className="navbar-options-mobile">
                <SocialMedia />
            </div>
        </div>
    )
}

export default Navbar