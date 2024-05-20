import "./index.css";
<<<<<<< HEAD
import { useState } from 'react';
import { Card, Modal, Button } from 'react-bootstrap';

=======
import React, { useState } from 'react';
import { Card, Modal } from 'react-bootstrap';
>>>>>>> e221a18bb3153f927b9ffce2b6ff9a9dac871f98

interface Props {
  id: string,
  title: string,
  description: string,
  img: string,
}

export function Cards(props: Props) {

  const [open, setOpen] = useState(false);

  const handleOpen = () => { setOpen(true) }
  const handleClose = () => { setOpen(false) }


  return (
    <>
      <Card id={props.id} onClick={handleOpen}>
        <Card.Img variant="top" src={props.img} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
        </Card.Body>
      </Card>
      <Modal show={open} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.description}</Modal.Body>
      </Modal>
    </>
  );
}