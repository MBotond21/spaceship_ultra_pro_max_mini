import "./index.css";
import { useState } from 'react';
import { Card, Modal, Button } from 'react-bootstrap';


interface Props{
  id: string,
  title: string,
  description: string,
  img: string,
}

export function Cards(props: Props){
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
    <>
        <Card  onClick={handleShow}>
          <div className="left">
            <Card.Img src={props.img}/>
            <Card.Title>{props.title}</Card.Title>
          </div> 
        </Card>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>{props.id}</Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
      );
}