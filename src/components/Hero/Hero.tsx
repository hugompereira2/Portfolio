import "./Hero.scss"
import Avatar from '../../assets/avatar.svg'
import ArrowIcon from '../../assets/arrow_icon.svg'
import Whatsapp from '../../assets/whatsapp.svg'
import TopSection from "../TopSection/TopSection"
import SocialMedia from "../SocialMedia/SocialMedia"
import { forwardRef } from "react"

interface IHero { }

const Hero = forwardRef<HTMLDivElement, IHero>((props, ref) => {

    return (
        <div id="hero" ref={ref}>
            <div className="user">
                <div className="user-info">
                    <TopSection text={"👋 Saudações!"} width={160} />
                    <h2 className="user-name">Hugo Mendonça</h2>
                    <span className="user-role">Front-end developer</span>
                    <SocialMedia />
                </div>
                <div className="user-avatar">
                    <img src={Avatar} alt="Avatar" />
                </div>
                <div className="user-contact">
                    <a href="/curriculo.pdf" download className="text-cv">Baixar CV <img src={ArrowIcon} alt="ArrowIcon" /></a>
                    <a
                        href="https://api.whatsapp.com/send?phone=5514996629222"
                        className="whatsapp-button" target="_blank">
                        <img src={Whatsapp} alt="whatsapp" />
                        Vamos Conversar
                    </a>
                </div>
            </div>
        </div>
    )
})

export default Hero
