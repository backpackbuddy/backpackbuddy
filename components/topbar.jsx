import { forwardRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import '../styles/topbar.scss';

// react bootstrap components
import {
    Container,
    Image,
    Nav,
    Navbar,
    NavDropdown,
} from 'react-bootstrap';

function TopBar(props) {
    return (
        <Navbar
            className="header--slim py-0 shadow-sm"
            collapseOnSelect={true}
            bg="white"
            expand="lg"
            sticky="top"
            style={{ transition: '.35s all ease' }}
            variant="light"
            {...props}
        >
            <Container>
                <span className="d-flex flex-nowrap align-items-center">
                    <Navbar.Brand href="/">
                        <Image
                            className="img-fluid"
                            alt="Backpack Buddy"
                            src="/images/default-logo.png"
                        />
                    </Navbar.Brand>
                    <span>
                        <Navbar.Toggle aria-controls="bb-navbar-nav" />
                    </span>
                </span>
                <Navbar.Collapse id="bb-navbar-nav">
                    <Nav className="ml-auto p-2 p-lg-0 font-weight-bold" defaultActiveKey={useRouter().pathname}>
                        {
                            [
                                {
                                    url: '/',
                                    name: 'Home',
                                },
                                {
                                    url: '/itinerary-lists',
                                    name: 'Itinerary Lists',
                                },
                                {
                                    url: 'http://blog.backpackbuddy.id',
                                    name: 'Blog',
                                },
                                {
                                    url: '/contact',
                                    name: 'Contact',
                                },
                                {
                                    url: '/about',
                                    name: 'About',
                                }
                            ].map(({ url, name }) => (
                                <Link href={url} key={name}>
                                    <Nav.Link className="px-lg-3" href={url}>{name}</Nav.Link>
                                </Link>
                        ))
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default TopBar;
