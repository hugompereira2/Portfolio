import "./ProjectCard.scss"
import TopSection from "../TopSection/TopSection"

const ProjectCard = () => {

    return (
        <div id="project-card">
            <h2 className="project-title">Move.it</h2>
            <p className="project-text">
                Aplicação da NLW#04 da Rocketseat.
                Desenvolvida com React. Plataforma
                de Pomodoro com exercícios.
            </p>
            <div className="project-type">
                <span className="badge-purple">React JS</span>
                <span className="badge-purple">Typescript</span>
            </div>

        </div>
    )
}

export default ProjectCard