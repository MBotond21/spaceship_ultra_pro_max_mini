import "./index.css";
import { useState } from 'react';
import { Button, Card } from 'react-bootstrap';

interface Props{
  title: string,
  description: string,
  img: string,

}

export function Cards(props: Props){

    const [open, setOpen] = useState(false); 

    return (
        <Card onClick={(event: React.MouseEvent<HTMLButtonElement>) => {setOpen(!open); event.currentTarget.classList.contains("clicked")? event.currentTarget.classList.remove("clicked"): event.currentTarget.classList.add("clicked");}}>
          <div className="left">
            <Card.Img src={props.img}/>
            <Card.Title>{props.title}</Card.Title>
          </div> 
          <div className="right">
            {open && <Card.Text>{props.description}</Card.Text>}
          </div> 
          
        </Card>
      );
}