import BasicTopBar from '../../components/topbar';
import filterData from '../../utils/filter-data';
import Layout from '../../components/layout';
import Link from 'next/link';
import toSlugCase from 'to-slug-case';
import toTitleCase from 'to-title-case';
import toSentenceCase from 'to-sentence-case-with-dot';
import Router from 'next/router';
import uniqueBy from 'unique-by';
import '../../styles/itinerary.scss';

// react bootstrap components
import {
    Button,
    Card,
    CardColumns,
    Container,
    Row,
    Table,
} from 'react-bootstrap';

const dataJson = require('../../data.json');

function Itinerary({ place }) {
    console.log('place: ', place);
    const data = filterData(dataJson, place);
    console.log(data);
    // const data = dataJson;

    return (
        <>
            <BasicTopBar />
            <Layout>
                <div className="bg-light">
                    <Container className="itinerary py-4">
                        <h2 className="text-center py-3">Itinerary { toTitleCase(place) }</h2>
                        <Row className="justify-content-center">
                            <CardColumns>
                                <ItineraryLists data={data} />
                            </CardColumns>
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
        foto_instagram,
    }, index) => ( 
    <Card border={borderColors[index % borderColors.length]}>
        <Link href={foto}>
            <Card.Img
                className="itinerary__img img-fluid"
                variant="top"
                src={foto}
                style={{
                    maxHeight: '312px',
                    objectFit: 'cover',
                }}
            />
        </Link>
        <Card.Body>
            <Card.Text>
                <h3>{ toTitleCase(tempat) }</h3>
                <p>{toSentenceCase(info)}</p>
                <Table>
                    <tbody>
                        <tr>
                            <th>Kecamatan</th>
                            <td>{ toTitleCase(kecamatan) }</td>
                        </tr>
                        <tr>
                            <th>Kabupaten</th>
                            <td>{ toTitleCase(kabupaten) }</td>
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
                            <td>{ toTitleCase(waktu) }</td>
                        </tr>
                        <tr>
                            <th>Kategori</th>
                            <td>{ toTitleCase(kategori.split(';').join(', ')) }</td>
                        </tr>
                        <tr>
                            <th>Google Map</th>
                            <td>
                                <a className="text-primary" href={map} target="_blank">Klik Disini</a>
                            </td>
                        </tr>
                        <tr>
                            <th>Instagram</th>
                            <td>
                                <a className="text-primary" href={foto_instagram} target="_blank">Klik Disini</a>
                            </td>
                        </tr>
                        <tr>
                            <th>Keterangan</th>
                            <td>{ toSentenceCase(keterangan) }</td>
                        </tr>
                    </tbody>
                </Table>
            </Card.Text>
        </Card.Body>
    </Card>
    ));
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
