import toSlugCase from 'to-slug-case';
import Link from 'next/link';
import toTitleCase from 'to-title-case';
import removeDuplicateObject from '../utils/remove-duplicate-object';
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
const data = removeDuplicateObject(dataJson, 'ikonik');

function Cards({ offset = 0, limit = data.length }) {

    return data.slice(offset, limit).map(({
        ikonik,
    }) => {
        console.log(' place : ', ikonik);
        const foto = filterData(dataJson, ikonik)[0].foto;

        return (
            <Col className="place__destination mb-4" xs={12} sm={6} md={4} key={ikonik}>
                <Card className="place__card">
                    <Link href={`/free-itinerary/${toSlugCase(ikonik)}`}>
                        <a>
                            <Card.Img
                                className="place__img"
                                loading="lazy"
                                variant="top"
                                src={foto} alt={ikonik} 
                            />
                        </a>
                    </Link>
                    <Card.Body className="place__card--body">
                        <Card.Title className="place__name d-flex align-items-center mb-0">
                            <LocationIcon />
                            <span>&nbsp;</span>

                            <Link href={`/free-itinerary/${toSlugCase(ikonik)}`}>
                                <a>{toTitleCase(ikonik)}</a>
                            </Link>
                        </Card.Title>
                    </Card.Body>
                </Card>
            </Col>
        );
    });
}

function Destination(props) {
    return (
        <Row className="my-2 my-md-0"> 
            <Cards {...props} /> 
        </Row>
    );
}

export default Destination;
