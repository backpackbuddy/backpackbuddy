import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef, useState } from 'react';
import {
  Col, Container, Row, Button, InputGroup, FormControl,
} from 'react-bootstrap';
import Layout from '../../components/layouts/app';
import DestinationList from '../../components/modules/DestinationList';
import BasicTopBar from '../../components/modules/Header';

const ORDER_RELATED = 'related';
const ORDDER_NEWER = 'newer';
const ORDER_BEST_SELL = 'best-seller';

const PRICE_LOW_TO_HIGH = 'low-to-high';
const PRICE_HIGH_TO_LOW = 'high-to-low';

function Destination() {
  const [search, setSearch] = useState('');

  return (
    <>
      <BasicTopBar />
      <Layout>
        <section className="pt-4">
          <Container>
            <h1 className="text-center">Destinasi Wisata</h1>
            <p className="text-center">Pilihan Destinasi Wisata di Bali</p>

            <div
              className="mb-3 p-3 shadow-sm"
              style={{ backgroundColor: '#f7f7f7' }}
            >
              <Row className="align-items-center" style={{ rowGap: '.6rem' }}>
                <Col xs sm="auto">
                  <div className="d-flex align-items-center flex-wrap" style={{ gap: '.5rem' }}>
                    <span>Urutkan</span>
                    <span className="d-flex flex-wrap" style={{ gap: '.5rem' }}>
                      <Button>Terkait</Button>
                      <Button variant="outline-primary">Terbaru</Button>
                      <Button variant="outline-primary">Terlaris</Button>
                    </span>
                  </div>
                </Col>
                <Col xs={12} sm md={3} lg="auto">
                  <div className="input-group">
                    <select className="custom-select" id="selectHarga">
                      <option selected>Harga</option>
                      <option value="1">Harga: Tinggi ke Rendah</option>
                      <option value="2">Harga: Rendah ke Tinggi</option>
                    </select>
                  </div>
                </Col>
                <Col xs={12} md>
                  <InputGroup>
                    <FormControl
                      defaultValue={search}
                      onChange={(e) => setSearch(e.target.value)}
                      placeholder="Cari destinasi .."
                      aria-label="Search"
                    />
                    <InputGroup.Append>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faSearch} />
                      </InputGroup.Text>
                    </InputGroup.Append>
                  </InputGroup>
                </Col>
              </Row>
            </div>
            <Row className="my-2 my-md-0">
              <DestinationList search={search} />
            </Row>
          </Container>
        </section>
      </Layout>
    </>
  );
}

export default Destination;
