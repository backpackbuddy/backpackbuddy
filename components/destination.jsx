import { useEffect, useState } from 'react';
import Link from 'next/link';
import '../styles/destinasi.scss';

// icons
import {
    LocationIcon,
} from './icons';

// react bootstrap components
import {
    Card,
    Col,
    Row,
} from 'react-bootstrap';

function Cards({ offset = 0, limit = 12 }) {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);

        fetch(`${process.env.NEXT_PUBLIC_API_URL}/itinerary`)
            .then(res => res.json())
            .then(json => setData(json.data))
            .finally(() => setIsLoading(false));
    }, []);

    return isLoading
        ? <h4>Loading ...</h4>
        : data.slice(offset, limit).map(({ id, place_name, featured_picture_thumb, media }) => (
        <Col className="place__destination mb-4" xs={12} sm={6} md={4} key={id}>
            <Card className="place__card">
                <Link href={`/destinasi/${id}`}>
                    <a className="place__img--link">
                        <Card.Img
                            className="place__img"
                            variant="top"
                            src={featured_picture_thumb} alt={media.alt}
                        />
                    </a>
                </Link>
                <Card.Body className="place__card--body">
                    <Card.Title className="place__name d-flex align-items-center mb-0">
                        <LocationIcon />
                        <span>&nbsp;</span>

                        <Link href={`/destinasi/${id}`}>
                            <a className="place__text-truncate" title={place_name}>{ place_name }</a>
                        </Link>
                    </Card.Title>
                </Card.Body>
            </Card>
        </Col>
    ));
}

function Destination(props) {
    return (
        <Row className="my-2 my-md-0">
            <Cards {...props} />
        </Row>
    );
}

export default Destination;
