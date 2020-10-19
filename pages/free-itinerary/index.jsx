import BasicTopBar from '../../components/topbar';
import Layout from '../../components/layout';
import Destination from '../../components/destination';

// react bootstrap components
import {
    Container,
} from 'react-bootstrap';

function FreeItinerary() {

    return (
        <>
            <BasicTopBar />
            <Layout>
                <section className="pt-4">
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
