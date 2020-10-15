import TopBar from '../../components/topbar';
import Layout from '../../components/layout';
import Destination from '../../components/destination';
import Link from 'next/link';
import toTitleCase from 'to-title-case';
import noDuplicateData from '../../utils/noDuplicateData';

// react bootstrap components
import {
    Container,
} from 'react-bootstrap';

const dataJson = require('./data.json');

function FreeItinerary() {
    const data = noDuplicateData(dataJson);

    return (
        <>
            <TopBar className="py-0 shadow-sm" bg="light" variant="light" sticky="top" />
            <Layout>
                <Container className="py-4">
                    <h2 className="text-center">Free Itinerary</h2>
                    <p className="text-center">Destinasi Wisata Populer</p>

                    <Destination data={data} />
                </Container>
            </Layout>
        </>
    );
}

export default FreeItinerary;
