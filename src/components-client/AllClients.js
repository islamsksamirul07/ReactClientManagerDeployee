import axios from "axios";
import { useState } from "react";
import { Button } from "react-bootstrap";
import Client from "./Client";
import urls from "../component/base_url_api";


function AllClients(){

    const[clients,setClients]=useState({});

    const getAllClients=()=>{

        axios.get(`${urls.base_url}/all-Clients`).
        then((response)=>{
            setClients(response.data);
            // console.log(response.data);
        },
    (error)=>{
        console.log(error);
    }
    )
    }


    // useEffect=()=>{
    //     clientHandel();
    // }

    const clientHandel=()=>{
        getAllClients();
   
    }

    const updatedClients=(id)=>{
        setClients(clients.filter((c)=>c.id!==id));
    }


    return(
        <div className="text-center">
          
           
            
                
                <Button onClick={clientHandel} variant="outline-primary" >Show All Data</Button>
               {
            clients.length>0?clients.map((item)=> <Client key={item.id} oClient={item} update={updatedClients}/>):" No Client "
        }

        </div>
    )
}

export default AllClients;