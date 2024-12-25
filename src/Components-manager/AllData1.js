import axios from "axios";
import React, { useEffect, useState } from "react";
import Manager1 from "./Manager1";
import urls from "../component/base_url_api";

function AllData1(){

    const[manager,setManager]=useState([]);

    const allData=()=>{
        axios.get(`${urls.base_url1}/all-data`).then((response)=>{
            setManager(response.data)
            // console.log("total data"+response.data)
    },(error)=>{
        console.log(error.data)
    })
    }
    useEffect(()=>{
        allData();
        console.log("ok"+manager)
    },[])

    // const updatedManager=(id)=>{
    //     setManager(manager.filter((c)=>c.id!==id));
    // }

    return (

        <div>
            {
            manager.length>0?manager.map((item)=> <Manager1 key={item.id} managerData={item}/>):" No Client "
        }
        </div>  
    )
}
export default AllData1;