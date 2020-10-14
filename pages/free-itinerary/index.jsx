import Header from '../../components/header';
import Layout from '../../components/layout';
import Destination from '../../components/destination';

import {
    Container,
    Row,
} from 'react-bootstrap';

function FreeItinerary() {
    return (
        <>
            <Header />
            <Layout>
                <section className="place">
                    <Container>
                        <h2 className="text-center">Free Itinerary</h2>
                        <p className="text-center">Destinasi Wisata Populer</p>

                        <Destination />
                    </Container>
                </section>
            </Layout>
        </>
    );
}

export default FreeItinerary;
