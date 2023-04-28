import "./ProjectCard.scss"
import TopSection from "../TopSection/TopSection"

interface IProjectCard {
    name: string;
    desc: string;
    live: string;
    github: string;
    img: string;
    tags: Array<string>;
}

const ProjectCard = (props: IProjectCard) => {

    const handleClickCard = () => {
        window.open(`${props.live || props.github}`, "_blank")
    }

    return (
        <div id="project-card" onClick={() => handleClickCard()}>
            <h2 className="project-title">{props.name}</h2>
            <p className="project-text">
                {props.desc}
            </p>
            <div className="project-type">
                {props.tags?.map((tag) => {
                    return (
                        <span key={tag} className={`${tag == "Online" ? "badge-purple green" : "badge-purple"}`}>{tag}</span>
                    )
                })}
            </div>
            <img src={props.img} alt="project-img" />
        </div>
    )
}

export default ProjectCard