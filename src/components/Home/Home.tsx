import { useContext, useEffect, useRef, RefObject, memo } from "react";
import Hero from "../Hero/Hero";
import Skill from "../Skill/Skill";
import AboutMe from "../AboutMe/AboutMe";
import Work from "../Work/Work";
import NavbarContext from "../../context/NavbarContext";
import Technology from "../Technology/Technology";
import "./Home.scss";

const Home = memo(() => {
    const { navbarContext, setNavbarContext } = useContext(NavbarContext);

    const sectionRefs: { [key: string]: RefObject<HTMLDivElement> } = {
        Hero: useRef<HTMLDivElement>(null),
        Skill: useRef<HTMLDivElement>(null),
        "About Me": useRef<HTMLDivElement>(null),
        Work: useRef<HTMLDivElement>(null),
    };

    useEffect(() => {
        const ref = sectionRefs[navbarContext];
        ref?.current?.scrollIntoView();
        setNavbarContext("");
    }, [navbarContext]);

    return (
        <main className="container">
            <Hero ref={sectionRefs.Hero} />
            <Skill />
            <AboutMe ref={sectionRefs["About Me"]} />
            <Work ref={sectionRefs.Work} />
            <Technology ref={sectionRefs.Skill} />
        </main>
    );
});

export default Home;