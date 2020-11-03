import BasicTopBar from '../../components/topbar';
import filterData from '../../utils/filter-data';
import ItineraryLists from '../../components/itinerary-lists';
import Layout from '../../components/layout';
import toSlugCase from 'to-slug-case';
import toTitleCase from 'to-title-case';
import Router from 'next/router';
import uniqueBy from 'unique-by';
import '../../styles/itinerary.scss';

// react bootstrap components
import {
    Button,
    Col,
    Container,
    Row,
} from 'react-bootstrap';

const dataJson = require('../../data.json');

function Itinerary({ place }) {
    const data = filterData(dataJson, place);

    return (
        <>
            <BasicTopBar />
            <Layout>
                <div className="bg-light">
                    <Container className="itinerary py-4">
                        <h2 className="text-center py-3">Itinerary { toTitleCase(place) }</h2>
                        <Row>
                            <Col xs={12} md={{ span: 6, offset: 3 }}>
                                <ItineraryLists data={data} />
                            </Col>
                        </Row>

                        <Button
                            className="mx-auto d-block mt-3"
                            variant="info"
                            onClick={Router.back}
                        >
                            Back to list
                        </Button>
                    </Container>
                </div>
            </Layout>
        </>
    );
}

// for next export 
export async function getStaticPaths() {
    const uniqueData = uniqueBy(dataJson, 'ikonik');

    return {
        paths: uniqueData.map(({ ikonik }) => ({
            params: {
                place: toSlugCase(ikonik)
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
