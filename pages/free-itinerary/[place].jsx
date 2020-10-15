import TopBar from '../../components/topbar';
import Layout from '../../components/layout';
import Link from 'next/link';
import toSlugCase from 'to-slug-case';
import toTitleCase from 'to-title-case';
import toSentenceCase from 'to-sentence-case-with-dot';
import filterData from '../../utils/filter-data';
import noDuplicateData from '../../utils/no-duplicate-data';
import '../../styles/itinerary.scss';

// react bootstrap components
import {
    Button,
    Card,
    Container,
    Col,
    Image,
    Row,
    Table,
    Tab,
    Tabs,
} from 'react-bootstrap';

const dataJson = require('../../data.json');

function Itinerary({ place }) {
    const data = filterData(dataJson, place);
    const semuaRuteKe = noDuplicateData(data, 'rute_ke');

    return (
        <>
            <TopBar className="py-0 shadow-sm" bg="white" variant="white" sticky="top" />
            <Container bg="white">
                <Tabs defaultActiveKey="1" transition={false} id="noanim-tab-example">
                    {
                        semuaRuteKe.map((item) => { 
                            console.log(item);
                            const rute = item.split(';');
                            const ruteKe = rute[0];
                            const urutan = rute[1];
                            const dataRute = data.filter(({ rute_ke }) => rute_ke.split(';')[0] == ruteKe);

                            return (
                                <Tab eventKey={ruteKe} title={'Rute ' + ruteKe}>
                                    <ItineraryLists data={dataRute} />
                                </Tab>
                            )
                        })
                    }
                </Tabs>
            </Container>
            <Layout>
                <div className="bg-light">
                    <Container className="itinerary py-4">
                        <h2 className="text-center py-3">Itinerary {toTitleCase(place)}</h2>


                        <Link href="/free-itinerary">
                            <Button className="mx-auto d-block mt-3" variant="info"> Back to list </Button>
                        </Link>
                    </Container>
                </div>
            </Layout>
        </>
    );
}


function ItineraryLists({ data }) {
    const borderColors = [
        'primary',
        'success',
        'danger',
        'warning',
        'info',
        'dark',
    ];

    return data.map(({
        kecamatan,
        kabupaten,
        waktu,
        map,
        tempat,
        untuk,
        info,
        kategori,
        telp,
        keterangan,
        foto,
        fotoInstagram,
    }, index) => ( 
    <Row className="justify-content-center">
        <Col className="mb-2" xs={12} sm={8} md={6}>
            <Card border={borderColors[index % borderColors.length]}>
                <Card.Img
                    className="itinerary__img img-fluid"
                    variant="top"
                    src={foto}
                    style={{
                        maxHeight: '312px',
                        objectFit: 'cover',
                    }}
                />
                <Card.Body>
                    <Card.Text>
                        <h3>{index + 1}. {toTitleCase(tempat)}</h3>
                        <p>{toSentenceCase(info)}</p>
                        <Table>
                            <tbody>
                                <tr>
                                    <th>Kecamatan</th>
                                    <td>{toTitleCase(kecamatan)}</td>
                                </tr>
                                <tr>
                                    <th>Kabupaten</th>
                                    <td>{toTitleCase(kabupaten)}</td>
                                </tr>
                                <tr>
                                    <th>Telp.</th>
                                    <td>{telp}</td>
                                </tr>
                                <tr>
                                    <th>Cocok Untuk</th>
                                    <td>
                                        { untuk.split(';').map(e => toTitleCase(e)).join(', ') }
                                    </td>
                                </tr>
                                <tr>
                                    <th>Waktu</th>
                                    <td>{toTitleCase(waktu)}</td>
                                </tr>
                                <tr>
                                    <th>Kategori</th>
                                    <td>{toTitleCase(kategori.split(';').join(', '))}</td>
                                </tr>
                                <tr>
                                    <th>Google Map</th>
                                    <td>
                                        <a className="text-primary" href={map} target="_blank">Klik Disini</a>
                                    </td>
                                </tr>
                                <tr>
                                    <th>Instagram</th>
                                    <td><a className="text-primary" href={fotoInstagram}></a></td>
                                </tr>
                                <tr>
                                    <th>Keterangan</th>
                                    <td>{toSentenceCase(keterangan)}</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    </Row>
    ));
}

// for next export 
export async function getStaticPaths() {
    const uniqueData = noDuplicateData(dataJson, 'rute');

    return {
        paths: uniqueData.map((rute) => ({
            params: {
                place: toSlugCase(rute)
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
