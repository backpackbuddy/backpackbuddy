import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Row, Tab, Tabs } from "react-bootstrap";
import toTitleCase from "to-title-case";
import Layout from "../../components/layouts/app";
import BackpackItem from "../../components/modules/BackpackItem";
import Header from "../../components/modules/Header";

function Backpack () {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState('pending');

  useEffect(() => {
    setLoading(true);

    axios.get(`/order/${tab}`)
      .then(res => setOrders(res.data))
      // eslint-disable-next-line no-alert
      .catch(err => alert(err.response.data.message))
      .finally(() => setLoading(false));
  }, [tab]);

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
              {['pending', 'completed', 'failed'].map(key => (
                <Tab eventKey={key} title={toTitleCase(key)}>
                  <section className="p-0 p-sm-4 border border-top-0">
                    <Row>
                      <BackpackItem
                        orders={orders}
                        loading={loading}
                      />
                    </Row>
                  </section>
                </Tab>
              ))}
            </Tabs>
          </Row>
        </Container>
      </Layout >
    </>
  );
}

export default Backpack;
