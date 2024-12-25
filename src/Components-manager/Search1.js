import React, { useState } from 'react';
import { Form, Button, InputGroup, FormControl, Spinner, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import urls from "../component/base_url_api";
import Manager1 from './Manager1';

const Search1 = () => {
    const [manager,setManager1]=useState({});
    const [searchValue, setSearchValue] = useState('');
    const [loading, setLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);

    

    const oneClientManager=(id)=>{
        axios.post(`${urls.base_url1}/one-client-manager?id=${id}`).then
        ((response)=>{
            setManager1(response.data);
            // setManager(response.data);
            // console.log(response.data);
            
            // console.log(manager.mail+"id "+id);
        }).catch((error)=>{
            console.log(error)
        })
    }
    
    
   

    const handleInputChange = (event) => {
        setSearchValue(event.target.value);
        
    };

    const handleSearch = (event) => {
        oneClientManager(searchValue);
        
        event.preventDefault();

        setLoading(true);
        setShowModal(true);

        setTimeout(() => {
            setLoading(false);
            setShowModal(false);
        }, 2000);
        
    };
    
    

   

    return (
        <>
            <div style={{ maxWidth: '600px', margin: 'auto', padding: '20px' }}>
                <Form onSubmit={handleSearch}>
                    <InputGroup>
                        <FormControl
                            type="text"
                            placeholder="Search..."
                            value={searchValue}
                            onChange={handleInputChange}
                            style={{ borderRadius: '0.25rem 0 0 0.25rem' }}
                        />
                        <Button
                            type="submit"
                            variant="primary"
                            style={{ borderRadius: '0 0.25rem 0.25rem 0' }}
                            disabled={loading} 
                            
                            
                        >
                            Search
                        </Button>
                    </InputGroup>
                </Form>
            </div>

            <Modal show={showModal} centered>
                <Modal.Body className="text-center">
                    <Spinner animation="border" size="lg" />
                    <div className="mt-3">Processing your request...</div>
                </Modal.Body>
            </Modal>
            {manager.id &&<Manager1 key={manager.id} managerData={manager}/>}
        </>
    );
};

export default Search1;
