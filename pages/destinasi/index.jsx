import BasicTopBar from '../../components/topbar';
import Layout from '../../components/layout';
import Destination from '../../components/destination';

// react bootstrap components
import {
    Container,
} from 'react-bootstrap';

function Destinasi() {

    return (
        <>
            <BasicTopBar />
            <Layout>
                <section className="pt-4">
                    <Container>
                        <h2 className="text-center">Destinasi Wisata</h2>
                        <p className="text-center">Pilihan Destinasi Wisata di Bali</p>

                        <Destination />
                    </Container>
                </section>
            </Layout>
        </>
    );
}

export default Destinasi;
