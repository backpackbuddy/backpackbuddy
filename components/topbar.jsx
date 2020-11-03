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
                                        dropdown: false
                                },
                                {
                                    name: 'Services',
                                    dropdown: true,
                                    items: [
                                        {
                                            url: '/free-itinerary',
                                            name: 'Free Itinerary'
                                        },
                                        {
                                            url: '/premium-itinerary',
                                            name: 'Premium Itinerary'
                                        },
                                        {
                                            url: '/voucher',
                                            name: 'Voucher'
                                        },
                                    ]
                                },
                                {
                                    url: 'http://blog.backpackbuddy.id',
                                    name: 'Blog',
                                    dropdown: false
                                },
                                {
                                        url: '/contact',
                                    name: 'Contact',
                                    dropdown: false
                                },
                                {
                                    url: '/about',
                                    name: 'About',
                                    dropdown: false
                                }
                            ].map(({ url, name, dropdown, items }) => {
                                return dropdown
                                    ? <NavDropdown title={name} id={'dropdown' + name}>
                                        {
                                            items.map(({ url, name }) => (
                                                <Link href={url} key={name}>
                                                    <NavDropdown.Item className="py-3" href={url}>{name}</NavDropdown.Item>
                                                </Link>
                                            ))
                                        }
                                    </NavDropdown>
                                    : <Link href={url} key={name}>
                                        <Nav.Link className="px-lg-3" href={url}>{name}</Nav.Link>
                                    </Link>
                            })
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default TopBar;
