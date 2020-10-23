import { useState, useEffect } from 'react';
import TopBar from '../components/topbar';
import Destination from '../components/destination';
import Intro from '../components/intro';
import Layout from '../components/layout';
import Link from 'next/link';
import { motion, useViewportScroll } from 'framer-motion';
import Sosmed from '../components/sosmed';
import toTitleCase from 'to-title-case';
import '../styles/home.scss';

// Icons
import {
    CustomIcon,
    ExperiencedIcon,
    FreeIcon,
    RightArrowIcon,
    VCircleArrowIcon,
} from '../components/icons';

// Bootstrap components
import {
    Button,
    Card,
    Carousel,
    Col,
    Container,
    Form,
    Image,
    Row,
} from 'react-bootstrap';


function Home() {
    const [shrink, setShrink] = useState(false);
    const [isOpen, setIsOpen] = useState([false, false, false]);

    function scrollFunction() {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            setShrink(true);
        } else {
            setShrink(false);
        }
    }

    function toggleReadMore(index) {
        setIsOpen(prevState => prevState.map((prev, i) => i === index ? !prev : prev));
    }

    useEffect(() => {
        window.onscroll = scrollFunction;
    }, []);

    return (
        <>
            {/* Mobile */}
            <TopBar
                className="d-lg-none shadow-sm py-0"
                fixed="top"
                sticky={false}
            />

            {/* Desktop */}
            <TopBar
                className={[ shrink ? 'py-0' : 'py-4', 'd-none d-lg-block' ].join(' ')}
                bg={ shrink ? 'white' : false }
                fixed="top"
                sticky={false}
                variant={ shrink ? 'light' : 'dark' }
            />
            <Intro />
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
                                        Icon: FreeIcon,
                                            title: 'Gratis',
                                            description: 'Kita memberikan rute gratis untuk wisata harian di Bali.'
                                    },
                                    {
                                        Icon: ExperiencedIcon,
                                        title: 'Konsultan berpengalaman',
                                        description: 'Para konsultan merupakan traveler asli Bali.'
                                    },
                                    {
                                        Icon: CustomIcon,
                                        title: 'Customize itinerary',
                                        description: 'Kami melayani request itinerary sesuai keinginan pelanggan.'
                                    },
                                ].map(({Icon, title, description}, index) => (
                                    <Col
                                        key={index}
                                        className="why__col text-center text-white mt-4 mt-md-0"
                                        xs={12}
                                        md={4}
                                    >
                                        <Card className="why__card">
                                            <Image loading="lazy" className="why__img" src={`/images/gallery/${index + 1}.jpeg`} alt={title} />
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
                <section className="testimonials">
                    <Container>
                        <h2 className="text-center">Testimonials</h2>
                        <p className="text-center">Apa kata mereka tentang backpack buddy</p>

                        <div className="testimonials__box">
                            <Row className="testimonials__row">
                                {
                                    [
                                        {
                                            name: 'fredy',
                                            message: 'Terimakasih atas itinerary yang diberikan untuk tur hari pertama saya. Konsultannya sangat friendly dan mengerti rute yang harus diambil selanjutnya. Rekomendasi kulinernya juga enak-enak. Terimakasih Backpackbuddy sukses selalu'
                                        },
                                        {
                                            name: 'eira',
                                            message: 'Sebagai seorang yang sudah sering berwisata ke Bali saya masih kesulitan untuk menentukan rute wisata terbaru yang bisa saya tempuh seharian. Adanya konsultan Backpackbuddy membantu saya memilih tempat wisata sesuai dengan minat dan jalur yang akan saya tempuh.'
                                        },
                                        {
                                            name: 'lia',
                                            message: 'Saya dan suami sudah berusia 50 tahun dan kami backpackeran dari Bandung. Saya sudah sering mengunjungi Bali namun terbatas di pantai Kuta dan seminyak saya. Saya lega ada jasa konsultasi dari Backpackbuddy yang membuatkan rute dan ide-ide wisata yang bisa kami tempuh dengan motor tanpa harus kecapekan. saya baru tau kalau Bali gak cuma di Kuta saja. Next time kalau anak saya kesini minta di aturin rutenya sama Backpackbuddy saja.'
                                        }
                                    ].map(({ name, message }, index) => (
                                        <Col className="testimonials__col" xs={12} md={4} key={index}>
                                            <div className="testimonials__img">
                                                <Image
                                                    className="testimonials__img img-fluid"
                                                    src={`/images/testimonials/${name}.jpeg`}
                                                    alt={toTitleCase(name)}
                                                />
                                            </div>
                                            <Card className="testimonials__card shadow" bg="info" text="light">
                                                <Card.Body>
                                                    <Card.Title className="text-center">{toTitleCase(name)}</Card.Title>
                                                    <Card.Text
                                                        className={["testimonials__message", !isOpen[index] && "testimonials__message--truncate"].join(' ')}
                                                    >
                                                        "{message}"
                                                    </Card.Text>
                                                    <Card.Text>
                                                        <Button
                                                            className="d-block mx-auto"
                                                            onClick={() => toggleReadMore(index)}
                                                            size="sm"
                                                            style={{ boxShadow: 'none' }}
                                                            variant="default"
                                                        >
                                                            <VCircleArrowIcon
                                                                fill="#f2f2f2"
                                                                height="25px"
                                                                style={{ transform: isOpen[index] ? 'rotate(0deg)' : 'rotate(180deg)' }}
                                                                width="25px"
                                                            />
                                                        </Button>
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
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
