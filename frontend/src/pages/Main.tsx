import { Col, Container, Row } from "react-bootstrap";
import { Cards } from "../components/Cards";
import { useRef } from 'react';

export function Main() {

    return (
        <>
            <Container>
                <Row>
                    <Col sm={4}>
                        <Cards id="1" img="https://cdn.mos.cms.futurecdn.net/qTmvroik2NtHVGsfCHyyxF-650-80.jpg.webp" title="SpaceRocket" description="Lorem ipsun" />
                        <Cards id="2" img="https://cdn.mos.cms.futurecdn.net/qTmvroik2NtHVGsfCHyyxF-650-80.jpg.webp" title="SpaceRocket" description="Lorem ipsun" />
                        <Cards id="3" img="https://cdn.mos.cms.futurecdn.net/qTmvroik2NtHVGsfCHyyxF-650-80.jpg.webp" title="SpaceRocket" description="Lorem ipsun" />
                        <Cards id="4" img="https://cdn.mos.cms.futurecdn.net/qTmvroik2NtHVGsfCHyyxF-650-80.jpg.webp" title="SpaceRocket" description="Lorem ipsun" />
                    </Col>
                </Row>
            </Container>
        </>
    )
}
