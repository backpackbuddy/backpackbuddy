import Link from 'next/link';
import '../styles/intro.scss'

// react bootstrap components
import {
    Button,
    Carousel,
    Container,
} from 'react-bootstrap';

function Header() {
    function Btn() {
        return <Link href="/destinasi"><Button className="intro__btn mt-5 shadow">Cari tau disini</Button></Link>
    }

    return (
        <div className="intro">
            <Carousel className="intro__carousel" controls={false} pause={false}>
                <Carousel.Item className="intro__carousel-item">
                    <div className="intro__caption">
                        <Container className="intro__caption-text">
                            <h1>Pertama Kali Ke Bali?</h1>
                            <p className="intro__description">Gratis rute wisata harian untuk backpacker di Bali.</p>
                            <Btn />
                        </Container>
                    </div>
                </Carousel.Item>
                <Carousel.Item className="intro__carousel-item">
                    <div className="intro__caption">
                        <Container className="intro__caption-text">
                            <h2>Butuh Rekomendasi Rute Lagi?</h2>
                            <p className="intro__description">Konsultasikan dengan kami secara gratis!</p>
                            <Btn />
                        </Container>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Header;
