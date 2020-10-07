import {
    Button,
    Nav,
    Navbar,
    Container,
    Image,
} from 'react-bootstrap';

export default function Header({ active }) {

    return (
        <>
            <div className="header">
                <Navbar variant="dark" expand="lg" sticky="top">
                    <Container>
                        <Navbar.Brand href="/">
                            <Image className="d-none d-sm-block" src="/images/default-logo.png" alt="Backpack Buddy" />
                            <Image className="d-sm-none" src="/images/default-logo-mobile.png" height="50px" alt="Backpack Buddy" />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="bb-navbar-nav" />
                        <Navbar.Collapse id="bb-navbar-nav">
                            <Nav className="ml-auto">
                                <Nav.Link className="active" href="/">HOME</Nav.Link>
                                <Nav.Link href="#">FREE ITINERARY</Nav.Link>
                                <Nav.Link href="/contact">CONTACT</Nav.Link>
                                <Nav.Link href="/about">ABOUT</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <div className="header__intro text-white text-center py-4 mt-5">
                    <Container>
                        <h1>Pertama Kali ke Bali?</h1>
                        <p className="home__description">Gratis rute wisata harian untuk backpacker di Bali</p>
                        <Button className="mt-4">Cari tau disini</Button>
                    </Container>
                </div>
            </div>
        </>
    );
}
