import { useState } from "react"
import "./SkillCard.scss"
import CodeIcon from '../../assets/code_icon.svg'

interface ISkillCard {
    light?: boolean;
    icon: string;
    smallText: string;
    text: string;
}

const Skill = ({ light = false, smallText, text, icon }: ISkillCard) => {

    return (
        <div id="skill-card" style={{ background: light ? "rgba(123, 74, 226, 0.1)" : "transparent" }}>
            <img src={icon} alt="svg" />
            <small className="small-text">{smallText}</small>
            <span className="text">{text}</span>
        </div>
    )
}

export default Skill