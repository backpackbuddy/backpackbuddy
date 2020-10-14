import TopBar from '../../components/topbar';
import Layout from '../../components/layout';
import toSlugCase from 'to-slug-case';
import toTitleCase from 'to-title-case';

// react bootstrap components
import {
    Container,
    Col,
    Image,
    Row,
} from 'react-bootstrap';

function Itinerary({ place }) {
    const data = filterData(place);

    function ItineraryLists() {
        return data.map((item) => ( 
            <Row>
                <Col className="bg-light" xs={12} md={4}>
                    <Image className="img-fluid" src="https://source.unsplash.com/random" alt="random" />
                </Col>
                <Col xs={12} md={8}>
                    <h2>{ toTitleCase(item.kecamatan) }</h2>
                </Col>
            </Row>
        ));
    }

    return (
        <>
            <TopBar className="py-0 shadow-sm" bg="light" variant="light" sticky="top" />
            <Layout>
                <Container className="py-4">
                    <ItineraryLists />
                </Container>
            </Layout>
        </>
    );
}

/*
 * filter data by kecamatan
 */
function filterData(place) {
    const data = require('./data.json');

    return data.filter(item => {
        const dataKecamatan = toSlugCase(item.kecamatan);
        const dataKabupaten = toSlugCase(item.kabupaten);
        const search = toSlugCase(place);

        return dataKecamatan == search || dataKabupaten == search;
    });
}

// for next export 
export async function getStaticPaths() {
    const data = await require('./data.json');
    const uniqueData = [];
    await data.forEach(({ kecamatan }) => {
        return uniqueData.indexOf(kecamatan) === -1 && uniqueData.push(kecamatan);
    });

    return {
        paths: uniqueData.map((kecamatan) => ({
            params: {
                place: toSlugCase(kecamatan)
            }
        })),
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const { place } = params;

    return { 
        props: { place }
    };
}

export default Itinerary;
