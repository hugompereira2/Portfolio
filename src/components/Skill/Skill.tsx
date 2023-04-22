import SkillCard from '../SkillCard/SkillCard'
import CodeIcon from '../../assets/code_icon.svg'
import BackIcon from '../../assets/back_icon.svg'
import WorkIcon from '../../assets/work_icon.svg'
import "./Skill.scss"
import { forwardRef } from "react"

interface ISkill { }


const Skill = forwardRef<HTMLDivElement, ISkill>((props, ref) => {

    const skills = [
        { icon: CodeIcon, smallText: "5 anos como", text: "Front-End", light: false },
        { icon: WorkIcon, smallText: "6 anos de", text: "Trabalhos", light: true },
        { icon: BackIcon, smallText: "5 anos como", text: "Back-End", light: false }
    ]

    return (
        <div id="skill" ref={ref}>
            <div className="skill-container">
                <div className="skill-deck">
                    {skills.map((skill) => {
                        return (
                            <SkillCard
                                key={skill.text}
                                icon={skill.icon}
                                smallText={skill.smallText}
                                text={skill.text}
                                light={skill.light} />
                        )
                    })}
                </div>
                <div className="purple-box">
                    <div className="box-info">
                        <span>Desenvolvedor</span>
                        <span>Front-end</span>
                    </div>
                    <div className="box-info">
                        <span>Desenvolvedor</span>
                        <span>Front-end</span>
                    </div>
                    <div className="box-info">
                        <span>Desenvolvedor</span>
                        <span>Front-end</span>
                    </div>
                </div>
            </div>
        </div>
    )
})

export default Skill