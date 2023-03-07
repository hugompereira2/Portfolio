import "./TopSection.scss"

interface ITopSection {
    text: string;
    width?: number;
}


const TopSection = (props: ITopSection) => {

    return (
        <span id="top-section" style={{width: props.width ? `${props.width}px` : "auto"}}>
            {props.text}
        </span>
    )
}

export default TopSection