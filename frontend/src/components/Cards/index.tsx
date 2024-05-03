import "./index.css";
import React, { useState } from 'react';
import { Card, Modal } from 'react-bootstrap';

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
      <Card id={props.id} onClick={ handleOpen }>
        <div className="left">
          <Card.Img src={props.img} />
          <Card.Title>{props.title}</Card.Title>
        </div>
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