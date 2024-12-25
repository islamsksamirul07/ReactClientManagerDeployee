import axios from "axios";
import {  Card, CardBody, CardText, Container} from "reactstrap";
import Button from 'react-bootstrap/Button';

import { toast } from "react-toastify";
import { Link} from "react-router-dom";
import urls from "../component/base_url_api";

function Client({oClient,update}){
   

   

    // const [client, setClient]=useState({
    //     "id":3,
    //     "name":"user3",
    //     "mail": "islamsksamirul10@gmail.com",
    //     "project": "zoho",
    //     "description": "this is internal project for zoho",
    //     "amount":45000
    
    // });
    // const [oClient, setClient]=useState();
    // useEffect(()=>{
    //     setClient(oClient1)
    // },[])

    function pdfDownload(id){
        axios({
            url: `${urls.base_url}/pdf-generate?id=${id}`,
            method: 'GET',
            responseType: 'blob', // important
        }).
        then((response)=>{
            // console.log(response)
            // Create a Blob from the PDF Stream
            const blob = new Blob([response.data], { type: 'application/pdf' });
            const url = URL.createObjectURL(blob);

            // Open the PDF in a new browser tab
            const newWindow = window.open(url, '_blank');
            
            // Add a download attribute to force download
            // const anchor = document.createElement('a');
            // anchor.href = url;
            // anchor.setAttribute('download', `client_${id}.pdf`);
            // anchor.style.display = 'none';
            // document.body.appendChild(anchor);
            // anchor.click();
            // document.body.removeChild(anchor);

            // Clean up the URL object
            URL.revokeObjectURL(url);

            // Close the new tab after some time
            // setTimeout(() => {
            //     newWindow.close();
            // }, 1000);
        },
        (error)=>{
            console.log(error)
        }
    )
    }

    const pdfDownloadM=()=>{
        pdfDownload(oClient.id);
    }

    function deleteClient(id){
        axios.post(`${urls.base_url}/delete?id=${id}`).then
        ((response)=>{
            console.log(id+"deleted")
            toast.success("Client deleted")
            update(id);
        },(error)=>{
            console.log(error)
        })
    }
    // const updatedCourses=(id)=>{
    //     setClient(oClient.filter((c)=>c.id!==id));
    // }
    const deleteClientCall=()=>{
        deleteClient(oClient.id);
    }

    return (
        <div>
            <Card className="d-block justify-content-center align-items-center">
                <CardBody>
                    <CardText>
                    ID : {oClient.id}
                    </CardText>
                    <CardText>
                    Name : {oClient.name}
                    </CardText>
                    <CardText>
                    Mail ID : {oClient.mail}
                    </CardText>
                    <CardText>
                    Project : {oClient.project}
                    </CardText>
                    <CardText>
                    Project description : {oClient.description}
                    </CardText>
                    <CardText>
                    Amount : {oClient.amount}
                    </CardText>
                    <CardText>
                    Approval status : {oClient.approve?"Approved":"Pending"}
                    </CardText>
                    <CardText>
                    Rejection status : {oClient.reject?"Rejected":"Pending"}
                    </CardText>
                    <CardText>
                    Manager message : {oClient.message}
                    </CardText>
                    <Container className="text-center">
                        {/* <Link to="/course-update" state={course}> */}
                        {/* <Link to ="/add-course"> */}
                        <Link to="/client-update" state= { oClient } // Pass the course data via state
                       >
                        {/* <Router> */}
                        <Button variant="outline-warning">Update</Button>
                        {/* </Router> */}
                        </Link>
                        &nbsp;<Button variant="outline-danger" className="mr-sm-2" onClick={deleteClientCall}>Delete</Button>&nbsp;
                        <Button variant="outline-primary" className="mr-sm-2" onClick={pdfDownloadM}>download</Button>
                    </Container>
                </CardBody>
                </Card>
            
            {/* <p>
            {course.id}
            {course.title}
            {course.desctip}</p>
            <div>-------------------------</div> */}
        </div>
    )
}

export default Client;