import toSlugCase from 'to-slug-case';
import Link from 'next/link';
import toTitleCase from 'to-title-case';
import noDuplicateData from '../utils/no-duplicate-data';
import filterData from '../utils/filter-data';
import '../styles/home.scss';

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

const dataJson = require('../data.json');
const data = noDuplicateData(dataJson, 'rute');

function Cards({ offset = 0, limit = data.length }) {

    return data.slice(offset, limit).map(place => {
        const foto = filterData(dataJson, place)[0].foto;

        return (
            <Col className="place__destination mb-4" xs={12} sm={6} md={4} key={place}>
                <Card className="place__card">
                    <Link href={`/free-itinerary/${toSlugCase(place)}`}>
                        <a>
                            <Card.Img
                                className="place__img"
                                loading="lazy"
                                variant="top"
                                src={foto} alt={place} 
                            />
                        </a>
                    </Link>
                    <Card.Body className="place__card--body">
                        <Card.Title className="place__name d-flex align-items-center mb-0">
                            <LocationIcon />
                            <span>&nbsp;</span>

                            <Link href={`/free-itinerary/${toSlugCase(place)}`}>
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
