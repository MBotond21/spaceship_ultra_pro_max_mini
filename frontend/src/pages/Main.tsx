import { Col, Container, Row } from "react-bootstrap";
import { Cards } from "../components/Cards";
import { useState } from 'react';

export function Main() {

    return (
        <>
            <Container>
                <Row>
                    <Col sm={4}>
                        <Cards img="https://cdn.mos.cms.futurecdn.net/qTmvroik2NtHVGsfCHyyxF-650-80.jpg.webp" title="SpaceRocket" description="Lorem ipsun"/>
                        <Cards img="https://cdn.mos.cms.futurecdn.net/qTmvroik2NtHVGsfCHyyxF-650-80.jpg.webp" title="SpaceRocket" description="Lorem ipsun"/>
                        <Cards img="https://cdn.mos.cms.futurecdn.net/qTmvroik2NtHVGsfCHyyxF-650-80.jpg.webp" title="SpaceRocket" description="Lorem ipsun"/>
                        <Cards img="https://cdn.mos.cms.futurecdn.net/qTmvroik2NtHVGsfCHyyxF-650-80.jpg.webp" title="SpaceRocket" description="Lorem ipsun"/>
                    </Col>
                    
                </Row>
            </Container>
        </>
    )
}