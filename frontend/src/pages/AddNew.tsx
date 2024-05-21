import { useState, ChangeEvent, FormEvent } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { AddNewData } from '../Backend.tsx';
export function AddNew() {
    const [formData, setFormData] = useState({
        name: '',
        weight: 0,
        height: 0,
        diameter: 0,
        thrust: 0,
        propellant: '',
        imgurl: ''
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Form data submitted:', formData);
        AddNewData(formData.name, formData.weight, formData.height, formData.diameter, formData.thrust, formData.propellant, formData.imgurl);
    };

    return (
        <Container>
            <Row className="my-4">
                <Col>
                    <h1>Új Űrrakéta Hozzáadása</h1>
                </Col>
            </Row>
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="formName">
                            <Form.Label>Rakéta neve</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="formWeight">
                            <Form.Label>Súly (tonna)</Form.Label>
                            <Form.Control
                                type="number"
                                name="weight"
                                value={formData.weight}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="formHeight">
                            <Form.Label>Magasság (méter)</Form.Label>
                            <Form.Control
                                type="number"
                                name="height"
                                value={formData.height}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="formDiameter">
                            <Form.Label>Átmérő (méter)</Form.Label>
                            <Form.Control
                                type="number"
                                name="diameter"
                                value={formData.diameter}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="formThrust">
                            <Form.Label>Tolóerő (kN)</Form.Label>
                            <Form.Control
                                type="number"
                                name="thrust"
                                value={formData.thrust}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="formPropellant">
                            <Form.Label>hajtóanyag</Form.Label>
                            <Form.Control
                                type="text"
                                name="propellant"
                                value={formData.propellant}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="formImgurl">
                            <Form.Label>Kép url</Form.Label>
                            <Form.Control
                                type="url"
                                name="imgurl"
                                value={formData.imgurl}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                    </Col>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </Row>
                
            </Form>
        </Container>
    );
}
