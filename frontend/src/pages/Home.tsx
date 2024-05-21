import { Col, Container, Row } from "react-bootstrap";
import { Header } from "../components/Header";
import { Slides } from "../components/Slides";

export function Home() {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col sm={6}>
                        <Header text="Egy szimpla információs weboldal űrrakétákról, mert" emphasized="erre mindenkinek szüksége van!"/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Slides/>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
