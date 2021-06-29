import Link from 'next/link';
import { Button, Carousel, Container } from 'react-bootstrap';

function Intro() {
  function Btn() {
    return (
      <Link href="/destination">
        <Button className="intro__btn mt-5">Cari tau disini</Button>
      </Link>
    );
  }

  return (
    <div className="intro">
      <Carousel className="intro__carousel" controls={false} pause={false}>
        <Carousel.Item className="intro__carousel-item">
          <div className="intro__caption">
            <Container className="intro__caption-text">
              <h1 className="font-weight-bold">Pertama kali ke Bali?</h1>
              <p className="intro__description">
                Gratis rute wisata harian untuk backpacker di Bali.
              </p>
              <Btn />
            </Container>
          </div>
        </Carousel.Item>
        <Carousel.Item className="intro__carousel-item">
          <div className="intro__caption">
            <Container className="intro__caption-text">
              <h2 className="font-weight-bold">Butuh rekomendasi rute lagi?</h2>
              <p className="intro__description">
                Konsultasikan dengan kami secara gratis!
              </p>
              <Btn />
            </Container>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Intro;
