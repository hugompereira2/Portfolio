import "./Work.scss"
import TopSection from "../TopSection/TopSection"
import ProjectCard from "../ProjectCard/ProjectCard"
import { forwardRef } from "react"

interface IWork { }

const Work = forwardRef<HTMLDivElement, IWork>((props, ref) => {

    return (
        <div id="work" ref={ref}>
            <TopSection text={"🔗 Portfólio"} width={160} />
            <h1 className="title">Trabalhos e projetos</h1>
            <div className="project-deck">
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>
        </div>
    )
})

export default Work