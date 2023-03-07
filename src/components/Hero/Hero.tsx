import "./Hero.scss"
import Avatar from '../../assets/avatar.svg'
import ArrowIcon from '../../assets/arrow_icon.svg'
import TopSection from "../TopSection/TopSection"
import SocialMedia from "../SocialMedia/SocialMedia"

const Home = () => {

    return (
        <div id="hero">
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
                    <span className="text-cv">Baixar CV <img src={ArrowIcon} alt="ArrowIcon" /></span>
                    <button>Vamos Conversar</button>
                </div>
            </div>
        </div>
    )
}

export default Home