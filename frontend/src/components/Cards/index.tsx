import "./index.css";
import React, { useState } from 'react';
import { Card, Modal } from 'react-bootstrap';

interface SpaceStick {
  id: string;
  name: string;
  weight: number;
  height: number;
  diameter: number;
  trust: number;
  propellant: string;
  imgurl: string;
}

interface Props {
  id: string,
  title: string,
  rocket: SpaceStick,
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
        <Modal.Body>Súly: {props.rocket.weight} tonna<br/>Magasság: {props.rocket.height} m<br/>Átmérő: {props.rocket.diameter} m<br/>Tolóerő: {props.rocket.trust} kN<br/>Hajtóanyag: {props.rocket.propellant}</Modal.Body>
      </Modal>
    </>
  );
}