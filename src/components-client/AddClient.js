import axios from "axios";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
// import base_url from "../component/base_url_api";
import { useState } from "react";
import Popup from "reactjs-popup";
import {  Card, CardBody, CardText, Container} from "reactstrap";
import urls from "../component/base_url_api";

// import {base_url} from "./base_url_api";

const AddClient=()=>{

    const[client,setClient]=useState();
    const[clientId,setClientId]=useState();
    const [popupOpen, setPopupOpen] = useState(false);

    const addClient=(data)=>{
        axios.post(`${urls.base_url}/add`,data).then
        (()=>{
            console.log("Add successfully");
            // setClient(response.data)
            setPopupOpen(true);
        }).catch((error)=>{
            console.log(error)
        })
    }

    const popupId=()=>{
        axios.get(`${urls.base_url}/client-id`).then
        ((response)=>{
            // console.log("this is your client ID "+response.data+popupOpen)
            setClientId(response.data);
        },
    (error)=>{
        console.log(error)
    })
    }

    const formHandler=(e)=>{
        // console.log(client);
        addClient(client);
        // popupId();
        e.preventDefault();
        
      }
  

    return(
        <div className="d-block justify-content-center align-items-center" style={{ minHeight: '20vh' }}>
        
   
           
        <Form onSubmit={formHandler}>
            {/* <FormGroup>
                <Label for="id">
                ID :
                </Label>
                <Input
                id="id"
                name="id"
                placeholder="Enter Client ID"
                type="text"
                onChange={(e)=>{setClient({...client,id:e.target.value})}}
                valid
                />
            </FormGroup> */}
            <FormGroup>
                <Label for="name">
                Client name : 
                </Label>
                <Input
                id="name"
                name="name"
                placeholder="Enter Client Name"
                type="text"
                onChange={(e)=>{setClient({...client,name:e.target.value})}}
                valid
                />
            </FormGroup>
            
            
            <FormGroup>
                <Label for="email">
                Email :
                </Label>
                <Input
                id="mail"
                name="mail"
                placeholder="Enter email "
                type="email"
                onChange={(e)=>{setClient({...client,mail:e.target.value})}}
                valid
                />
            </FormGroup>
            <FormGroup>
                <Label for="project">
                Project Name :
                </Label>
                <Input
                id="project"
                name="project"
                placeholder="Enter Client Project name"
                type="text"
                onChange={(e)=>{setClient({...client,project:e.target.value})}}
                valid
                />
            </FormGroup>
            <FormGroup>
                <Label for="description">
                Project Description :
                </Label>
                <Input
                id="description"
                name="description"
                placeholder="Enter Client Project description"
                type="text"
                onChange={(e)=>{setClient({...client,description:e.target.value})}}
                valid
                />
            </FormGroup>
            <FormGroup>
                <Label for="amount">
                Amount :
                </Label>
                <Input
                id="amount"
                name="amount"
                placeholder="Total amount in rupees client can spend"
                type="text"
                onChange={(e)=>{setClient({...client,amount:e.target.value})}}
                valid
                />
            </FormGroup>
            
            <Button type="submit" color="success" onClick={popupId}>Add</Button>
            <Button color="warning" type="reset">Reset</Button>
            </Form>
            {/* <Popup trigger={<button>Trigger</button>} position="right center">
                <div>Popup content here</div>
            </Popup> */}
             <Popup open={popupOpen} onClose={() => setPopupOpen(false)} >
             <Card className="d-block justify-content-center align-items-center">
                <CardBody>
                    <CardText>
                    Your generated client ID is : {clientId}</CardText>
                    <Container className="text-center"><Button className="text-center" color="success" onClick={() => setPopupOpen(false)}>OK</Button>
                    </Container>
                </CardBody>
                </Card>
            </Popup>
        </div>
    )

}
export default AddClient;