import '../styles/header.scss';
import { useRouter } from 'next/router';
import Link from 'next/link';
import {
    Button,
    Nav,
    Navbar,
    Container,
    Image,
} from 'react-bootstrap';

export default function Header(props) {
    return (
        <header className="header">
            <Navbar className="py-4" variant="dark" expand="lg">
                <Container>
                    <Link href="/">
                        <Navbar.Brand href="/">
                            <Image className="d-none d-sm-block" src="/images/default-logo.png" alt="Backpack Buddy" />
                            <Image className="d-sm-none" src="/images/default-logo-mobile.png" height="50px" alt="Backpack Buddy" />
                        </Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="bb-navbar-nav" />
                    <Navbar.Collapse id="bb-navbar-nav">
                        <Nav className="ml-auto p-2 p-lg-0 font-weight-bold" defaultActiveKey={useRouter().pathname}>
                            <Link href="/">
                                <Nav.Link href="/">Home</Nav.Link>
                            </Link>
                            <Link href="/free-itinerary">
                                <Nav.Link href="/free-itinerary">Free Itinerary</Nav.Link>
                            </Link>
                            <Link href="/contact">
                                <Nav.Link href="/contact">Contact</Nav.Link>
                            </Link>
                            <Link href="/about">
                                <Nav.Link href="/about">About</Nav.Link>
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <div className="intro text-white text-center">
                <Container>
                    <h1>Pertama Kali ke Bali?</h1>
                    <p className="intro__description">Gratis rute wisata harian untuk backpacker di Bali</p>
                    <Button className="mt-4">Cari tau disini</Button>
                </Container>
            </div>
        </header>
    );
}
