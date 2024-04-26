import "./index.css";
import { Button, Card } from 'react-bootstrap';

interface Props{
  title: string,
  description: string,
  img: string
}

export function Cards(props: Props){

    return (
        <Card onClick={(event: React.MouseEvent<HTMLButtonElement>) => event.currentTarget.classList.contains("clicked")? event.currentTarget.classList.remove("clicked"): event.currentTarget.classList.add("clicked")}>
          <Card.Img src={props.img}/>
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>{props.description}</Card.Text>
          </Card.Body>
        </Card>
      );
}