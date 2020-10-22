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
        <Navbar collapseOnSelect={true} {...props}>
            <Container>
                <Navbar.Brand href="/">
                    <Image className="d-none d-sm-block" src="/images/default-logo.png" alt="Backpack Buddy" />
                    <Image className="d-sm-none" src="/images/default-logo-mobile.png" width="50px" height="auto" alt="Backpack Buddy" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="bb-navbar-nav" />
                <Navbar.Collapse id="bb-navbar-nav">
                    <Nav className="ml-auto p-2 p-lg-0 font-weight-bold" defaultActiveKey={useRouter().pathname}>
                        {
                            ['home', 'free itinerary', 'contact', 'about'].map((item) => (
                                <Link href={'/' + toSlugCase(item == 'home' ? '' : item)}>
                                    <Nav.Link
                                        className="px-lg-3"
                                        href={'/' + toSlugCase(item == 'home' ? '' : item)}
                                    >
                                        {toTitleCase(item)}
                                    </Nav.Link>
                                </Link>
                            ))
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export function HomeTopBar(props) {
    return (
        <TopBar
            className="header--home py-4"
            bg="white"
            expand="lg"
            fixed="top"
            variant="light"
            {...props}
        />
    );
}

function BasicTopBar(props) {
    return (
        <TopBar
            className="header--slim py-0 shadow-sm"
            bg="white"
            expand="lg"
            sticky="top"
            style={{ transition: 'all .3s ease' }}
            variant="light"
            {...props}
        />
    );
}

export default BasicTopBar;
