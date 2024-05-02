import { Col, Container, Row } from "react-bootstrap";
import { Cards } from "../components/Cards";
import { useRef } from 'react';

export function Main() {

    const collapse = (cardNumber: number) => {
        const ruleRegex = /\.([a-zA-Z0-9-_]+)\s*{\s*([^}]+)}/g;
        const coll = `
            .card{
                width: 100%;
            }
            .right{
                width: 0%;
            }
        `
        let styl;
        styl = ruleRegex.exec(coll)
        console.log(styl)
        for (let index = 1; index <= 4; index++) {
            const element = document.getElementById(index.toString())
            if(index != cardNumber && element != null) {
                element.style.width = '100%'
            } else {
                
            }
        }
    }

    return (
        <>
            <Container>
                <Row>
                    <Col sm={4}>
                        <Cards id="1" img="https://cdn.mos.cms.futurecdn.net/qTmvroik2NtHVGsfCHyyxF-650-80.jpg.webp" title="SpaceRocket" description="Lorem ipsun" collapse={() => collapse(1)}/>
                        <Cards id="2" img="https://cdn.mos.cms.futurecdn.net/qTmvroik2NtHVGsfCHyyxF-650-80.jpg.webp" title="SpaceRocket" description="Lorem ipsun" collapse={() => collapse(2)}/>
                        <Cards id="3" img="https://cdn.mos.cms.futurecdn.net/qTmvroik2NtHVGsfCHyyxF-650-80.jpg.webp" title="SpaceRocket" description="Lorem ipsun" collapse={() => collapse(3)}/>
                        <Cards id="4" img="https://cdn.mos.cms.futurecdn.net/qTmvroik2NtHVGsfCHyyxF-650-80.jpg.webp" title="SpaceRocket" description="Lorem ipsun" collapse={() => collapse(4)}/>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
