import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef } from 'react';
import {
  Col, Container, Row, Button, InputGroup, FormControl,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import PageHeader from '../../components/elements/PageHeader';
import Layout from '../../components/layouts/app';
import DestinationList from '../../components/modules/DestinationList';
import BasicTopBar from '../../components/modules/Header';
import {
  ORDER_BY_NEWEST,
  ORDER_BY_BEST_SELLER,
  ORDER_BY_PRICE,
  ORDER_HIGHEST_TO_LOWEST,
  ORDER_LOWEST_TO_HIGHEST,
} from '../../constants/filter-destination';
import { filterDestinations } from '../../store/actions/destinations';
import { selectFilterDestinations } from '../../store/selector';

function Destination() {
  const { search, orderBy } = useSelector(selectFilterDestinations);
  const inputSearch = useRef(search);
  const dispatch = useDispatch();

  const setOrderBy = (value) => {
    dispatch(filterDestinations({
      orderBy: value,
      order: 'DESC',
    }));
  };

  const setSearch = (e) => {
    e.preventDefault();
    dispatch(filterDestinations({ search: inputSearch.current.value }));
  };

  const setPriceOrder = (e) => {
    if (e.target.value === ORDER_HIGHEST_TO_LOWEST) {
      dispatch(filterDestinations({ orderBy: ORDER_BY_PRICE, order: 'DESC' }));
    } else if (e.target.value === ORDER_LOWEST_TO_HIGHEST) {
      dispatch(filterDestinations({ orderBy: ORDER_BY_PRICE, order: 'ASC' }));
    }
  };

  return (
    <>
      <BasicTopBar />
      <Layout>
        <section className="pt-4">
          <Container>
            <PageHeader
              title="destinasi wisata"
              description="Pilihan destinasi wisata di Bali"
            />
            <div
              className="mb-3 p-3 shadow-sm"
              style={{ backgroundColor: '#f7f7f7' }}
            >
              <Row className="align-items-center" style={{ rowGap: '.6rem' }}>
                <Col xs sm="auto">
                  <div className="d-flex align-items-center flex-wrap" style={{ gap: '.5rem' }}>
                    <span>Urutkan</span>
                    <span className="d-flex flex-wrap" style={{ gap: '.5rem' }}>
                      <Button
                        onClick={() => setOrderBy(ORDER_BY_NEWEST)}
                        variant={orderBy === ORDER_BY_NEWEST ? 'primary' : 'outline-primary'}
                      >
                        Terbaru
                      </Button>
                      <Button
                        onClick={() => setOrderBy(ORDER_BY_BEST_SELLER)}
                        variant={orderBy === ORDER_BY_BEST_SELLER ? 'primary' : 'outline-primary'}
                      >
                        Terlaris
                      </Button>
                    </span>
                  </div>
                </Col>
                <Col xs={12} sm md={3} lg="auto" className="pl-sm-0">
                  <div className="input-group">
                    <select className="custom-select" onChange={setPriceOrder}>
                      <option disabled selected={orderBy !== ORDER_BY_PRICE}>Harga</option>
                      <option value={ORDER_HIGHEST_TO_LOWEST}>Harga: Tinggi ke Rendah </option>
                      <option value={ORDER_LOWEST_TO_HIGHEST}>Harga: Rendah ke Tinggi</option>
                    </select>
                  </div>
                </Col>
                <Col xs={12} md>
                  <form onSubmit={setSearch} method="get">
                    <InputGroup>
                      <FormControl
                        defaultValue={search}
                        ref={inputSearch}
                        placeholder="Cari destinasi .."
                        aria-label="Search"
                        type="search"
                      />
                      <InputGroup.Append onClick={setSearch} style={{ cursor: 'pointer' }}>
                        <InputGroup.Text>
                          <FontAwesomeIcon icon={faSearch} />
                        </InputGroup.Text>
                      </InputGroup.Append>
                    </InputGroup>
                  </form>
                </Col>
              </Row>
            </div>
            <Row className="my-2 my-md-0">
              <DestinationList />
            </Row>
          </Container>
        </section>
      </Layout>
    </>
  );
}

export default Destination;
