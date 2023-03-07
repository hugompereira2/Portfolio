import logo from '../../assets/logo.svg';
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./Navbar.scss";
import { useEffect, useState } from "react";

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [user, setUser] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [error, setError] = useState<string>("");

    const GoHome = () => {
        navigate("/");
    }

    const GoDashboard = () => {
        navigate("/dashboard");
    }

    const goProfile = () => {
        navigate("/profile");
    }

    const handleLogout = () => {
        localStorage.removeItem("user");
        navigate("/");
        setUser(false);
    }

    useEffect(() => {
        const userStringfy = localStorage.getItem("user");

        if (userStringfy) {
            setUser(JSON.parse(userStringfy));
        }
    }, [showModal])

    return (
        <div id="navbar">
            <div className="navbar-options">
                <img src={logo} className="logo" alt="logo" onClick={GoHome} />
                <a href="#">Home</a>
                <a href="#">Sobre mim</a>
                <a href="#">Skills</a>
                <a href="#">Carreira</a>
                <a href="#">Contato</a>
            </div>
        </div>
    )
}

export default Navbar