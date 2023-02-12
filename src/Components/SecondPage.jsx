import React, {useEffect, useState} from "react";
import axios from "axios";
import { DataGrid } from '@mui/x-data-grid'; 
import { Icon, Typography } from "@mui/material";
import ShowChartIcon from '@mui/icons-material/ShowChart';



const SecondPage=()=>{
    const [results,setResults]=useState([]);
    useEffect(()=>{
        const call=async()=>{
           const res= await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false");
           console.log(res.data)
           setResults(res.data); 
        };
    call();
    },[]);
  
        const columns= [
            {field:"symbol", headerName:"Symbol", width:200},
            {field:"id", headerName:"Name", width:200},
            {field:"market_cap_rank", headerName:"Rank", width:200},
            {field:"current_price", headerName:"Current Price", width:300},
            {field:"total_volume", headerName:"Total Volume", width:300},
            {field:"price_change_percentage_24h", headerName:"Price Change", width:300},
        ];

    const rows=results.map((result)=>({
        symbol:result.symbol.toUpperCase(),
        id:result.id.toUpperCase(),
        market_cap_rank:result.market_cap_rank, 
        current_price:`$ ${result.current_price.toLocaleString()}`,
        total_volume:`$ ${result.total_volume.toLocaleString()}`,
        price_change_percentage_24h:`${result.price_change_percentage_24h} %`,
    }));

    return(
        <div style={{width:"100%", height:"100vh"}}>
            
            <div style={{textAlign:"center"}}><Typography variant='h4'>Top 100 Crypto Currency Stats <ShowChartIcon/></Typography></div>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={12}
                rowPerPageOptions={10}
                />
            
        </div>
    )
};
export default SecondPage;