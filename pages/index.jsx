import { useState, useEffect } from 'react';
import BasicTopBar from '../components/topbar';
import Destination from '../components/destination';
import Header from '../components/header';
import Layout from '../components/layout';
import Link from 'next/link';
import Sosmed from '../components/sosmed';
import '../styles/home.scss';

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


function Home() {
    const [shrink, setShrink] = useState(false);

    function scrollFunction() {
        if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
            !shrink && setShrink(true);
        } else {
            shrink && setShrink(false);
        }
    }

    useEffect(() => {
        window.onscroll = scrollFunction;
    }, []);

    return (
        <>
            {
                shrink && <BasicTopBar
                    sticky={false}
                    fixed="top"
                />
            }
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
                                        className="why__col text-center text-white mt-4 mt-md-0"
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

                <section className="testimonials">
                    <Container>
                        <h2 className="text-center">Testimonials</h2>
                        <p className="description text-center mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, inventore!</p>

                        <div className="testimonials__box bg-white shadow mt-4">
                            <Row className="testimonials__row flex-nowrap overflow-auto mx-0 px-4">
                                {
                                    Array.from(Array(13).keys()).map(i => (
                                        <Image
                                            className="img-fluid w-100"
                                            src={`/images/testimonials/${i + 1}.jpg`}
                                            alt="Testimonials Backpack Buddy"
                                            key={i}
                                        />
                                    ))
                                }
                            </Row>
                        </div>
                    </Container>
                </section>

                <section className="find bg-light">
                    <Container className="px-4">
                        <Row>
                            <Col xs={12} md={8}>
                                <h2 className="text-center text-md-left">Cari Itinerary Favoritmu</h2>
                            </Col>
                            <Col className="d-none d-md-block" xs={12} md={4}>
                                <h3>Newsletter</h3>
                            </Col>
                        </Row>
                        <Row>
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
                                <h3 className="d-md-none text-center">Newsletter</h3>
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
