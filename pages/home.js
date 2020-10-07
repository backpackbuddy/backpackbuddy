import Layout from '../components/layout';
import toSlugCase from 'to-slug-case';
import {
    Button,
    Col,
    Container,
    Image,
    Row,
} from 'react-bootstrap';

export default function Home() {
    const data = [ 'Ubud', 'Gianyar', 'Kintamani', 'Nusa Penida', 'Seminyak', 'Canggu' ];

    function Destinasi() {
        return data.map(place => {
            const filename = toSlugCase(place);

            return (
                <Col className="p-2" xs={12} sm={6} md={4}>
                    <Image className="img-fluid" src="/images/destinasi/ubud.jpg" alt={place} />
                    <h5 className="font-italic d-flex align-items-center home__place p-3">
                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-geo-alt-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                        </svg>
                        <span>&nbsp; {place}</span>
                    </h5>
                </Col>
            );
        });
    }

    return (
        <Layout>
            <div className="bg-dark text-white py-4">
                <Container className="home__destinasi">
                    <h2 className="text-center">Mulai petualanganmu</h2>
                    <p className="text-center font-italic">Destinasi wisata populer di Bali</p>

                    <Row className="my-2 my-md-0">
                        <Destinasi />
                    </Row>
                </Container>
            </div>
        </Layout>
    )
}
