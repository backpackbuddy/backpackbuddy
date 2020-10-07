import Layout from '../components/layout';
import {
    Button,
    Container,
} from 'react-bootstrap';

export default function Home() {
    return (
        <Layout>
            <div className="bg-dark text-white py-4">
                <Container className="home__destinasi">
                    <h2 className="text-center">Mulai petualanganmu</h2>
                    <p className="text-center font-italic">Destinasi wisata populer di Bali</p>
                </Container>
            </div>
        </Layout>
    )
}
