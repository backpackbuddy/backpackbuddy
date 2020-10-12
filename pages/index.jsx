import '../styles/home.scss';
import Layout from '../components/layout';
import toSlugCase from 'to-slug-case';

// Icons
import {
    FreeIcon,
    ExperiencedIcon,
    CustomIcon,
    RightArrowIcon,
} from '../components/icons';

// Bootstrap components
import {
    Button,
    Card,
    Col,
    Container,
    Form,
    Image,
    Row,
} from 'react-bootstrap';

import Sosmed from '../components/sosmed';

function Destination() {
    const data = [ 'Ubud', 'Gianyar', 'Kintamani', 'Nusa Penida', 'Seminyak', 'Canggu' ];

    return data.map(place => {
        const filename = toSlugCase(place);

        return (
            <Col className="place__destination mb-4" xs={12} sm={6} md={4}>
                <Card className="place__card">
                    <a href="#">
                        <Card.Img className="place__img" loading="lazy" variant="top" src={`/images/destinasi/${filename}.jpg`} alt={place} />
                    </a>
                    <Card.Body className="place__card--body">
                        <Card.Title className="place__name d-flex align-items-center mb-0">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-geo-alt-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                            </svg>
                            <span>&nbsp;</span>
                            <a href="#">{place}</a>
                        </Card.Title>
                    </Card.Body>
                </Card>
            </Col>
        );
    });
}

function Home() {
    return (
        <Layout>
            <section className="place">
                <Container className="">
                    <h2 className="text-center">Mulai petualanganmu</h2>
                    <p className="text-center">Destinasi wisata populer di Bali</p>

                    <Row className="my-2 my-md-0">
                        <Destination />
                    </Row>
                    <a className="text-center d-flex align-items-center justify-content-center" href="free-itinerary">
                        <span>Destinasi Lainnya</span>
                        &nbsp;<RightArrowIcon width="1rem" height="1rem" />
                    </a>
                </Container>
            </section>

            <section className="why bg-light">
                <Container>
                    <h2 className="text-center">Mengapa memilih Backpack Buddy?</h2>
                    <p className="description text-center font-weight-normal font-italic mx-auto mb-4">
                        Kami melayani konsultasi rute wisata harian dengan informasi yang lebih lengkap secara langsung bersama konsultan kami
                    </p>

                    <Row>
                        {
                            [
                            {
                                file: '1',
                                Icon: FreeIcon,
                                title: 'Gratis',
                                description: 'Kita memberikan rute gratis untuk wisata harian di Bali.'
                                },
                                {
                                    file: '2',
                                        Icon: ExperiencedIcon,
                                        title: 'Konsultan berpengalaman',
                                        description: 'Para konsultan merupakan traveler asli Bali.'
                                },
                                {
                                    file: '3',
                                    Icon: CustomIcon,
                                    title: 'Customize itinerary',
                                    description: 'Kami melayani request itinerary sesuai keinginan pelanggan.'
                                    },
                            ].map(({file, Icon, title, description}, index) => (
                                <Col
                                    key={index}
                                    className="why__col text-center text-white"
                                    xs={12}
                                    md={4}
                                >
                                    <Card className="why__card">
                                        <Image loading="lazy" className="why__img" src={`/images/gallery/${file}.jpeg`} alt={title} />
                                        <Card.Body className="why__text">
                                            <Icon width="48px" height="48px" fill="#fff" />
                                            <h4 className="mt-3">{title}</h4>
                                            <p>{description}</p>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))
                        }
                    </Row>
                    <a className="text-center mt-4 d-flex align-items-center justify-content-center" href="free-itinerary">
                        <span>Tentang Kami</span>
                        &nbsp;<RightArrowIcon width="1rem" height="1rem" />
                    </a>
                </Container>
            </section>

            {/*}
            <section className="concultation text-white">
                <Container className="text-right">
                    <h2 className="pb-2">Gratis konsultasi rute wisata</h2>
                    <h5 className="w-50 ml-auto font-weight-normal">Butuh rekomendasi rute selama di Bali atau ingin tahu wisata anti mainstream yang baru di Bali. Konsultasikan dengan kami secara gratis!</h5>
                    <Button
                        className="mt-2"
                        variant="outline-light"
                        size="lg"
                    >
                        Cari tau disini
                    </Button>
                </Container>
            </section>
            {*/}

            <section className="find">
                <Container className="px-4">
                    <h3>Cari Itinerary favoritmu</h3>
                    <Row>
                        <Col xs={12} md={4}>
                            <a className="d-block my-2" href="#">Bertualang ke hutan</a>
                            <a className="d-block my-2" href="#">Petualangan ke air terjun</a>
                            <a className="d-block my-2" href="#">Itinerary untuk keluarga dan anak-anak</a>
                            <a className="d-block my-2" href="#">Mengenal budaya Bali</a>
                        </Col>

                        <Col xs={12} md={4}>
                            <a className="d-block my-2" href="#">City tour kota Denpasar</a>
                            <a className="d-block my-2" href="#">Mencari sunset</a>
                            <a className="d-block my-2" href="#">Naik Gunung Batur</a>
                            <a className="d-block my-2" href="#">Petualangan penuh adrenalin</a>
                        </Col>

                        <Col
                            xs={12}
                            md={4}
                            className="mt-4 mt-md-0"
                        >
                            <h4>Newsletter</h4>
                            <p>Daftar untuk mendapatkan info terbaru</p>
                            <Form action="/" method="post">
                                <Form.Group controlId="#newsletterInput">
                                    <Form.Control type="email" name="email" id="newsletterInput" placeholder="Masukkan alamat E-Mail"/>
                                </Form.Group>
                                <Button variant="outline-primary" type="submit">Subscribe</Button>
                            </Form>
                            <div className="mt-4">
                                <Sosmed
                                    className="m-2"
                                    fill="#222"
                                    height="2.5em"
                                    width="2.5em"
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Layout>
    )
}

export default Home;
