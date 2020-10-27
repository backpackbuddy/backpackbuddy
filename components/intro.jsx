import Link from 'next/link';
import '../styles/intro.scss'

// react bootstrap components
import {
    Button,
    Carousel,
    Container,
} from 'react-bootstrap';

function Header() {

    return (
        <div className="intro">
            <Carousel className="intro__carousel" controls={false} pause={false}>
                <Carousel.Item className="intro__carousel-item">
                    <div className="intro__caption">
                        <Container className="intro__caption-text">
                            <h1>Pertama Kali Ke Bali?</h1>
                            <p className="intro__description">Gratis rute wisata harian untuk backpacker di Bali.</p>
                            <Link href="/free-itinerary"><Button className="mt-5 shadow">Cari tau disini</Button></Link>
                        </Container>
                    </div>
                </Carousel.Item>
                <Carousel.Item className="intro__carousel-item">
                    <div className="intro__caption">
                        <Container className="intro__caption-text">
                            <h1>Butuh Rekomendasi Rute?</h1>
                            <p className="intro__description">Konsultasikan dengan kami secara gratis!</p>
                            <Link href="/free-itinerary"><Button className="mt-5 shadow">Cari tau disini</Button></Link>
                        </Container>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Header;
