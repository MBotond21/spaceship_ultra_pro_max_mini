import { Col, Container, Row } from "react-bootstrap";
import { Cards } from "../components/Cards";
import { useRef, useState, useEffect } from 'react';
import { Title } from "react-bootstrap/lib/Modal";
import { collectionGroup } from "firebase/firestore";
import { ListData } from '../Backend.tsx';

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

export function Main() {
    const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
    const cols = 4;
    const rows = Math.ceil(numbers.length / cols);

    const [data, setData] = useState<SpaceStick[]>([]);

    useEffect(() => {
      const fetchData = async () => {
        const dataList = await ListData();
        setData(dataList);
      };
      
      fetchData();
    }, []);

    function chunkArray(arr: any[], size: number): any[][] {
        let chunkedArray: any[][] = [];
        for (let i = 0; i < arr.length; i += size) {
          chunkedArray.push(arr.slice(i, i + size));
        }
        return chunkedArray;
    }
 
    const sliced = chunkArray(data, cols);
    

    return (
        <>
            <Container fluid>
                {sliced.map((chunk, index) => (
                    <Row key={index}>
                        {chunk.map((rocket, index) => (
                            <Col key={index} sm={12/cols}>
                                <Cards id={`${rocket.id}`} title={`${rocket.name}`} rocket={rocket} img={rocket.imgurl}/>
                            </Col>
                        ))}
                    </Row>
                ))}
            </Container>
        </>
    )
}
