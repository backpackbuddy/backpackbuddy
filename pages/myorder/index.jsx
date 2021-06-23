import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import {
  Container, Row, Tab, Tabs,
} from 'react-bootstrap';
import { useSelector } from 'react-redux';
import toTitleCase from 'to-title-case';
import Layout from '../../components/layouts/app';
import BackpackItem from '../../components/modules/BackpackItem';
import Header from '../../components/modules/Header';
import {
  TAB_COMPLETED,
  TAB_FAILED,
  TAB_PENDING,
} from '../../constants/order-tab';
import { selectAuth } from '../../store/selector';

function Backpack() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState('pending');
  const { isLoggedIn } = useSelector(selectAuth);
  const router = useRouter();

  useEffect(() => {
    setLoading(true);

    if (!isLoggedIn) {
      router.push('/login');
    }

    axios.get(`/order/${tab}`)
      .then((res) => setOrders(res.data))
      .finally(() => setLoading(false));
  }, [tab, isLoggedIn]);

  return (
    <>
      <Header />
      <Layout>
        <Container className="my-5">
          <Row className="d-block">
            <Tabs
              id="backpack-tab"
              activeKey={tab}
              onSelect={setTab}
            >
              {[
                {
                  key: TAB_PENDING,
                  title: 'tertunda',
                },
                {
                  key: TAB_COMPLETED,
                  title: 'selesai',
                },
                {
                  key: TAB_FAILED,
                  title: 'gagal',
                },
              ].map(({ key, title }) => (
                <Tab eventKey={key} title={toTitleCase(title)}>
                  <div className="border border-top-0 bg-white p-4">
                    <Row>
                      <BackpackItem
                        orders={orders}
                        loading={loading}
                      />
                    </Row>
                  </div>
                </Tab>
              ))}
            </Tabs>
          </Row>
        </Container>
      </Layout>
    </>
  );
}

export default Backpack;
