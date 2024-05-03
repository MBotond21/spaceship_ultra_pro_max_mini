import { Col, Container, Row } from "react-bootstrap";
import { Cards } from "../components/Cards";
import { useRef } from 'react';
import { Title } from "react-bootstrap/lib/Modal";
import { collectionGroup } from "firebase/firestore";

export function Main() {

    const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
    const cols = 4;
    const rows = Math.ceil(numbers.length / cols);

    function chunkArray(arr: any[], size: number): any[][] {
        let chunkedArray: any[][] = [];
        for (let i = 0; i < arr.length; i += size) {
          chunkedArray.push(arr.slice(i, i + size));
        }
        return chunkedArray;
    }

    const sliced = chunkArray(numbers, cols);


    return (
        <>
            <Container fluid>
                {sliced.map((chunk, index) => (
                    <Row key={index}>
                        {chunk.map((number, index) => (
                            <Col key={index} sm={12/cols}>
                                <Cards id={`${number}`} title={`Space rocket${number}`} description="Lorem ipsum dolor sit amet" img="https://cdn.mos.cms.futurecdn.net/qTmvroik2NtHVGsfCHyyxF-650-80.jpg.webp"/>
                            </Col>
                        ))}
                    </Row>
                ))}
            </Container>
        </>
    )
}
