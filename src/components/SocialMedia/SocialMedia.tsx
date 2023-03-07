import { useState } from "react"
import "./SocialMedia.scss"
import Github from '../../assets/github.svg'
import Linkedin from '../../assets/linkedin.svg'


const SocialMedia = () => {

    return (
        <div id="social-media">
            <a href="https://www.linkedin.com/in/hugompereira2" target={"_blank"}>
                <img src={Linkedin} alt="Linkedin" />
            </a>
            <a href="https://github.com/hugompereira2" target={"_blank"}>
                <img src={Github} alt="Github" />
            </a>
        </div>
    )
}

export default SocialMedia