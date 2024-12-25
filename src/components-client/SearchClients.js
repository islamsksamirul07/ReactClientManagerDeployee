import React, { useState} from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import Client from './Client';
import axios from 'axios';
import urls from "../component/base_url_api";

const SearchClients = () => {
  const [client, setClient] = useState({});
  const [id, setId] = useState('');
  

  const handleIdChange = (event) => {
    setId(event.target.value);
  };

  const getOneDataFromDatabase = (id) => {

    axios.post(`${urls.base_url}/find?id=${id}`)
      .then((response) => {
        // console.log(response.data);
        setClient(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      
  };

  // useEffect(() => {
  //   // Fetch data only when 'id' changes
  //   if (id) {
  //     getOneDataFromDatabase(id);
  //   }
  // }, [id]);

  const handleClick = () => {
    getOneDataFromDatabase(id);
  };

  return (
    <div>
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '20vh' }}>
        <div className="text-center">
          <Form className="mb-3"  onChange={handleIdChange} >
            <Row className="align-items-center">
              <Col xs="auto">
                <Form.Control type="text" name="id" placeholder="Client Id" className="mr-sm-2" />
              </Col>
              <Col xs="auto">
                <Button variant="outline-primary" onClick={handleClick} >
                 Search
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
      <p className="d-flex justify-content-center align-items-center">Please enter client ID and get client details. Here you can see, update, delete and download client data.</p>
      {/* Render Client component only when 'client.id' is defined */}
      {client.id && <Client key={client.id} oClient={client} />}
    </div>
  );
};

export default SearchClients;
