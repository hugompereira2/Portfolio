import "./Footer.scss"
import SocialMedia from "../SocialMedia/SocialMedia";

const Footer = () => {

    const year = new Date().getFullYear();

    return (
        <div id="footer">
            <div className="footer-items">
                <span>Copyright © Hugo Mendonça · {year}</span>
                <SocialMedia />
            </div>
        </div>
    )
}

export default Footer