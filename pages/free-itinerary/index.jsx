import TopBar from '../../components/topbar';
import Layout from '../../components/layout';
import Destination from '../../components/destination';
import Link from 'next/link';

import {
    Container,
    Row,
} from 'react-bootstrap';

function FreeItinerary() {
    return (
        <>
            <TopBar className="py-0 shadow-sm" bg="light" variant="light" sticky="top" />
            <Layout>
                <Container className="py-4">
                    <h2 className="text-center">Free Itinerary</h2>
                    <p className="text-center">Destinasi Wisata Populer</p>

                    <Destination />
                </Container>
            </Layout>
        </>
    );
}

export default FreeItinerary;
