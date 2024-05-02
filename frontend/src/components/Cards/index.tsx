import "./index.css";
import { useState } from 'react';
import { Card } from 'react-bootstrap';

interface Props{
  id: string,
  title: string,
  description: string,
  img: string,
  collapse: () =>  void,
}

export function Cards(props: Props){

    const [open, setOpen] = useState(false); 

    return (
        <Card id={props.id}  onClick={(event: React.MouseEvent<HTMLButtonElement>) => { props.collapse(); setOpen(!open); event.currentTarget.classList.contains("clicked")? event.currentTarget.classList.remove("clicked"): event.currentTarget.classList.add("clicked");}}>
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