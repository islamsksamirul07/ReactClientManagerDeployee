import axios from "axios";
import React, { useState, useEffect } from "react";
import urls from "../component/base_url_api";
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Form,
  Container
} from "react-bootstrap";
import Popup from "reactjs-popup";

function Manager1({ managerData }) {
    // Initialize state with managerData
    const [oldManager, setOldManager] = useState({
        approve: managerData.approve ? "true" : "false",
        reject: managerData.reject ? "true" : "false",
        message: managerData.message || ''
    });
    
    const [popupOpen, setPopupOpen] = useState(false);
    

    useEffect(() => {
        // Initialize state when managerData changes
        setOldManager({
            managerId: managerData.id,
            approve: managerData.approve ? "true" : "false",
            reject: managerData.reject ? "true" : "false",
            message: managerData.message || ''
        });
    }, [managerData]);

    const managerUpdate = () => {
        axios.post(`${urls.base_url1}/update`,oldManager )
            .then(response => {
                setPopupOpen(true);
                // console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    };

    const callUpdate = (event) => {
        event.preventDefault();
        managerUpdate();
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-70">
            <Card style={{ width: "25rem" }}>
                <CardBody>
                    <CardTitle>Client Id: {managerData.id}</CardTitle>
                    <CardText>Name: {managerData.name}</CardText>
                    <CardText>Email: {managerData.mail}</CardText>
                    <CardText>Project: {managerData.project}</CardText>
                    <CardText>Description: {managerData.description}</CardText>
                    <CardText>Amount: {managerData.amount}</CardText>
                </CardBody>
                <hr />
                <Form onSubmit={callUpdate}>
                    <fieldset>
                        <Form.Group className="mb-3 d-flex align-items-center">
                            <Form.Label htmlFor="approve" className="me-3">
                                Approve current status:
                            </Form.Label>
                            <Form.Control
                                as="select"
                                id="approve"
                                value={oldManager.approve}
                                onChange={(e) => setOldManager({ ...oldManager, approve: e.target.value })}
                            >
                                <option value="">Select status</option>
                                <option value="true">Approved</option>
                                <option value="false">Pending</option>
                            </Form.Control>
                        </Form.Group>
                        
                        <Form.Group className="mb-3 d-flex align-items-center">
                            <Form.Label htmlFor="reject" className="me-3">
                                Reject current status:
                            </Form.Label>
                            <Form.Control
                                as="select"
                                id="reject"
                                value={oldManager.reject}
                                onChange={(e) => setOldManager({ ...oldManager, reject: e.target.value })}
                            >
                                <option value="">Select status</option>
                                <option value="true">Rejected</option>
                                <option value="false">Pending</option>
                            </Form.Control>
                        </Form.Group>
                        
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="message">Message for employee:</Form.Label>
                            <Form.Control
                                id="message"
                                type="text"
                                placeholder="Enter your message"
                                value={oldManager.message}
                                onChange={(e) => setOldManager({ ...oldManager, message: e.target.value })}
                            />
                        </Form.Group>
                        
                        <Button type="submit">Submit</Button>
                    </fieldset>
                </Form>

                <Popup open={popupOpen} onClose={() => setPopupOpen(false)} >
             <Card className="d-block justify-content-center align-items-center">
                <CardBody>
                    <CardText>
                    Thanks for your update</CardText>
                    
                    <CardText>ID : {managerData.id}</CardText>
                    <Container className="text-center"><Button className="text-center" color="success" onClick={() => setPopupOpen(false)}>OK</Button>
                    </Container>
                </CardBody>
                </Card>
            </Popup>
            </Card>
            
        </div>
    );
}

export default Manager1;
