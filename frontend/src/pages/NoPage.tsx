import { Col, Container, Row } from "react-bootstrap";

export function NoPage() {
    return <>
        <Container>
            <Row>
                <Col>
                    <h1>404, content not found!</h1>
                </Col>
            </Row>
        </Container>
    </>
}