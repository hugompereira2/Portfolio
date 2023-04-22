import { forwardRef } from "react";
import TopSection from "../TopSection/TopSection";

import ReactIcon from "../../assets/techs/react_icon.svg"
import VueIcon from "../../assets/techs/vue_icon.svg"
import JsIcon from "../../assets/techs/js_icon.svg"
import NodeIcon from "../../assets/techs/node_icon.svg"
import Html5 from "../../assets/techs/html5_icon.svg"
import GitHub from "../../assets/github.svg"
import TsIcon from "../../assets/techs/ts_icon.svg"
import FigmaIcon from "../../assets/techs/figma_icon.svg"
import SassIcon from "../../assets/techs/sass_icon.svg"
import AwsIcon from "../../assets/techs/aws_icon.svg"
import CsharpIcon from "../../assets/techs/csharp_icon.svg"
import MySql from "../../assets/techs/mysql_icon.svg"
import SqlServerIcon from "../../assets/techs/sqlServer_icon.svg"
import ElectronIcon from "../../assets/techs/electron_icon.svg"

import "./Technology.scss"

interface ITechnology { }

const Technology = forwardRef<HTMLDivElement, ITechnology>((props, ref) => {

    const nowTechnology = [
        { path: ReactIcon, text: "ReactIcon", link: "https://reactjs.org/" },
        { path: VueIcon, text: "VueIcon", link: "https://vuejs.org/" },
        { path: TsIcon, text: "TsIcon", link: "https://www.typescriptlang.org/" },
        { path: JsIcon, text: "JsIcon", link: "https://www.javascript.com/" },
        { path: NodeIcon, text: "NodeIcon", link: "https://nodejs.org/en/" },
        { path: Html5, text: "Html5", link: "https://developer.mozilla.org/en-US/docs/Glossary/HTML5" },
        { path: GitHub, text: "GitHub", link: "https://www.github.com" },
        { path: FigmaIcon, text: "FigmaIcon", link: "https://www.figma.com" },
        { path: SassIcon, text: "SassIcon", link: "https://sass-lang.com/" },
        { path: AwsIcon, text: "AwsIcon", link: "https://aws.amazon.com" },
        { path: MySql, text: "MySql", link: "https://www.mysql.com/" },
    ]

    const pastTechnology = [
        { path: CsharpIcon, text: "CsharpIcon", link: "https://learn.microsoft.com/pt-br/dotnet/csharp/" },
        { path: SqlServerIcon, text: "SqlServerIcon", link: "https://www.microsoft.com/pt-br/sql-server/sql-server-downloads" },
        { path: ElectronIcon, text: "ElectronIcon", link: "https://www.electronjs.org/pt/" },
    ]

    return (
        <div id="technology" ref={ref}>
            <TopSection text={"🧑‍💻 Skills · Experiências"} width={280} />
            <h2 className="title">Tecnologias e habilidades</h2>
            <span className="subtitle">Techs que uso no dia a dia</span>
            <div className="technology-deck">
                {
                    nowTechnology.map((tec) => {
                        return (
                            <a key={tec.text} href={tec.link} target={"_blank"}>
                                <img className={`${tec.text == "MySql" ? "rounded" : ""}`} src={tec.path} alt={tec.text} />
                            </a>
                        )
                    })
                }
            </div>
            <span className="subtitle">Outras techs com que já realizei projetos</span>
            <div className="technology-deck">
                {
                    pastTechnology.map((tec) => {
                        return (
                            <a key={tec.text} href={tec.link} target={"_blank"}>
                                <img className={`${tec.text == "ElectronIcon" ? "rounded" : ""}`} src={tec.path} alt={tec.text} />
                            </a>
                        )
                    })
                }
            </div>
        </div>
    )
})

export default Technology