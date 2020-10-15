import toSlugCase from 'to-slug-case';
import Link from 'next/link';
import toTitleCase from 'to-title-case';
import '../styles/home.scss';

// icons 
import { LocationIcon } from './icons';

// react bootstrap components
import {
    Card,
    Col,
    Row,
} from 'react-bootstrap';

function Cards({ data = [
    'Ubud', 'Gianyar', 'Kintamani', 'Nusa Penida', 'Seminyak', 'Canggu' 
] }) {

    return data.map(place => {
        const filename = toSlugCase(place);

        return (
            <Col className="place__destination mb-4" xs={12} sm={6} md={4} key={filename}>
                <Card className="place__card">
                    <Link href="/free-itinerary/[place]" as={`/free-itinerary/${filename}`}>
                        <a>
                            <Card.Img
                                className="place__img"
                                loading="lazy"
                                variant="top"
                                src={`/images/destinasi/${filename}.jpg`} alt={place} 
                            />
                        </a>
                    </Link>
                    <Card.Body className="place__card--body">
                        <Card.Title className="place__name d-flex align-items-center mb-0">
                            <LocationIcon />
                            <span>&nbsp;</span>

                            <Link href={`/free-itinerary/${filename}`}>
                                <a>{toTitleCase(place)}</a>
                            </Link>
                        </Card.Title>
                    </Card.Body>
                </Card>
            </Col>
        );
    });
}

function Destination(props) {
    return <Row className="my-2 my-md-0"> <Cards {...props} /> </Row>;
}

export default Destination;
