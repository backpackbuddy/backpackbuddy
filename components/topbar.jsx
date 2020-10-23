import Link from 'next/link';
import toSlugCase from 'to-slug-case';
import toTitleCase from 'to-title-case';
import { useRouter } from 'next/router';

// react bootstrap components
import {
    Container,
    Image,
    Nav,
    Navbar,
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
                <Navbar.Brand href="/">
                    <Image className="d-none d-sm-block" src="/images/default-logo.png" alt="Backpack Buddy" />
                    <Image className="d-sm-none" src="/images/default-logo-mobile.png" width="50px" height="auto" alt="Backpack Buddy" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="bb-navbar-nav" />
                <Navbar.Collapse id="bb-navbar-nav">
                    <Nav className="ml-auto p-2 p-lg-0 font-weight-bold" defaultActiveKey={useRouter().pathname}>
                        {
                            [
                                {
                                    url: '/',
                                    name: 'Home',
                                },
                                {
                                    url: '/free-itinerary',
                                    name: 'Free Itinerary'
                                },
                                {
                                    url: 'https://blog.backpackbuddy.id',
                                    name: 'Blog',
                                },
                                {
                                    url: '/contact',
                                    name: 'Contact'
                                },
                                {
                                    url: '/about',
                                    name: 'About'
                                }
                            ].map(({ url, name }) => (
                                <Link href={url}>
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
