import '../styles/home.scss';
import Header from '../components/header';
import Layout from '../components/layout';
import Link from 'next/link';
import Destination from '../components/destination';
import Categories from '../components/categories';

// Icons
import {
    CustomIcon,
    ExperiencedIcon,
    FreeIcon,
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

function Home() {
    return (
        <>
            <Header />
            <Layout>
                <section className="place">
                    <Container>
                        <h2 className="text-center">Mulai petualanganmu</h2>
                        <p className="text-center">Destinasi wisata populer di Bali</p>

                        <Destination limit={6} />
                        <Link href="/free-itinerary">
                            <a className="text-center d-flex align-items-center justify-content-center" href="/free-itinerary">
                                <span>Destinasi Lainnya</span>
                                &nbsp;<RightArrowIcon width="1rem" height="1rem" />
                            </a>
                        </Link>
                    </Container>
                </section>

                <section className="why bg-light">
                    <Container>
                        <h2 className="text-center">Mengapa memilih Backpack Buddy?</h2>
                        <p className="description text-center font-weight-normal mx-auto mb-4">
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
                                        className="why__col text-center text-white mt-2 mt-md-0"
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
                        <Link href="/about">
                            <a className="text-center mt-4 d-flex align-items-center justify-content-center" href="/about">
                                <span>Tentang Kami</span>
                                &nbsp;<RightArrowIcon width="1rem" height="1rem" />
                            </a>
                        </Link>
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
                        <Row>
                            <Col xs={12} md={8}>
                                <h3>Cari Itinerary Favoritmu</h3>
                            </Col>
                            <Col className="d-none d-md-block" xs={12} md={4}>
                                <h4>Newsletter</h4>
                            </Col>
                        </Row>
                        <Row>
                            <Categories />
                            <Col xs={12} md={4}>
                                <a className="d-block my-3" href="#">Bertualang ke hutan</a>
                                <a className="d-block my-3" href="#">Petualangan ke air terjun</a>
                                <a className="d-block my-3" href="#">Itinerary untuk keluarga dan anak-anak</a>
                                <a className="d-block my-3" href="#">Mengenal budaya Bali</a>
                            </Col>

                            <Col xs={12} md={4}>
                                <a className="d-block my-3" href="#">City tour kota Denpasar</a>
                                <a className="d-block my-3" href="#">Mencari sunset</a>
                                <a className="d-block my-3" href="#">Naik Gunung Batur</a>
                                <a className="d-block my-3" href="#">Petualangan penuh adrenalin</a>
                            </Col>

                            <Col
                                xs={12}
                                md={4}
                                className="find__newsletter mt-4 mt-md-0"
                            >
                                <h4 className="d-md-none">Newsletter</h4>
                                <p>Daftar untuk mendapatkan info terbaru</p>
                                <Form action="/" method="post">
                                    <Form.Group controlId="newsletterInput">
                                        <Form.Control type="email" name="email" placeholder="Masukkan alamat E-Mail"/>
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
        </>
    );
}

export default Home;
