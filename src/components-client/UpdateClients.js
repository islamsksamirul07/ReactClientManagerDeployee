import axios from "axios";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import urls from "../component/base_url_api";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const UpdateClients=()=>{

    const location=useLocation();
    const updateClients=location.state;
    const[client,setClient]=useState({...updateClients});

    const addClient=(data)=>{
        axios.post(`${urls.base_url}/update-client`,data).then
        ((response)=>{
            console.log("Add successfully");
            // setClient(response.data)
        },(error)=>{
            console.log(error)
        })
    }

    const formHandler=(e)=>{
        // console.log(client);
        addClient(client);
        e.preventDefault();
        
      }
  

    return(
        <div className="d-block justify-content-center align-items-center" style={{ minHeight: '20vh' }}>
        
   
           
        <Form onSubmit={formHandler}>
            <FormGroup>
                <Label for="id">
                ID :
                </Label>
                <Input
                id="id"
                name="id"
                placeholder="Enter Client ID"
                type="text"
                defaultValue={client.id}
                onChange={(e)=>{setClient({...client,id:e.target.value})}}
                disabled
                valid
                />
            </FormGroup>
            <FormGroup>
                <Label for="name">
                Client name : 
                </Label>
                <Input
                id="name"
                name="name"
                placeholder="Enter Client Name"
                type="text"
                defaultValue={client.name}
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
                defaultValue={client.email}
                onChange={(e)=>{setClient({...client,email:e.target.value})}}
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
                defaultValue={client.project}
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
                defaultValue={client.description}
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
                defaultValue={client.amount}
                onChange={(e)=>{setClient({...client,amount:e.target.value})}}
                valid
                />
            </FormGroup>
            <Button type="submit" color="success">Update</Button>
            </Form>
        </div>
    )

}
export default UpdateClients;