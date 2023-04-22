import "./AboutMe.scss"
import Avatar from '../../assets/avatar.svg'
import TopSection from "../TopSection/TopSection"
import { forwardRef } from "react"

interface IAboutMe { }

const AboutMe = forwardRef<HTMLDivElement, IAboutMe>((props, ref) => {

    return (
        <div id="about-me" ref={ref}>
            <img src={Avatar} alt="Avatar" />
            <div className="column">
                <TopSection text="🧐 Sobre mim" width={160} />
                <h1 className="title">Hugo Mendonça</h1>
                <p className="description">👋 Me chamo Hugo Mendonça Pereira. Muito Prazer!
                    <br /><br />
                    👨‍💻 Há mais de 2 anos desenvolvendo e programando interfaces com JavaScript, React JS e Typescript. <br />
                    🎓 Graduado em Análise e Desenvolvimento de Sistemas pela Fatec de Lins-SP. <br />
                    💡 Interesses em desenvolvimento Front-end com React, React Native, VueJS e UX/UI Design.
                    <br /><br />
                    🚀 Tentando ser um pouquinho melhor do que ontem todos dias.</p>
            </div>
        </div>
    )
})

export default AboutMe