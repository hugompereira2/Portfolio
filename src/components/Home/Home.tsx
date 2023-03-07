import Hero from '../Hero/Hero'
import Skill from '../Skill/Skill'
import AboutMe from '../AboutMe/AboutMe'
import "./Home.scss"

const Home = () => {

    return (
        <>
            {/* <Navbar /> */}
            <div className="container">
                <Hero />
                <Skill/>
                <AboutMe />
            </div>
        </>
    )
}

export default Home