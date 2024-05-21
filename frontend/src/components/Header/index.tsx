import './index.css';

interface Props{
    text: string,
    emphasized?: string
}

export function Header(props: Props){
    return(
        <p className="header">{props.text} <span className="emp">{props.emphasized}</span></p>
    );
}