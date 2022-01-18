import { DeleteOutline } from "@mui/icons-material";
import { DataGrid } from "@mui/x-data-grid";
import {
    format,
} from "date-fns";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ProductRows } from "../../dummyData";
import { apiGet } from "../../services/api";
import "./productList.css";

export default function ProductList() {
    const [data, setData] = useState([]);

    const columns = [
        { field: "market_cap_rank", headerName: "Rank", width: 70, edit: false },
        {
            field: "name",
            headerName: "Coins",
            width: 200,
            renderCell: (params) => (
                <div className="productListProduct">
                    <img src={params.row.image} alt="user" />
                    {params.row.name}
                </div>
            ),
        },
        {
            field: "symbol",
            headerName: "Symbol",
            width: 100,
            renderCell: (params) => (
                    <span>{params.row.symbol.toUpperCase()}</span>
            ),
        },
        {
            field: "current_price",
            headerName: "Current Price",
            width: 150,
        },
        {
            field: "high_24h",
            headerName: "High 24h",
            width: 100,
        },
        {
            field: "low_24h",
            headerName: "Low 24h",
            width: 100,
        },
       
        {
            field: "price_change_percentage_24h",
            headerName: "Percentage",
            width: 110,
            renderCell: params => (
                <span style={{color: params.row.price_change_percentage_24h < 0 ? 'red' : 'green' }}>
                    {params.row.price_change_percentage_24h.toFixed(2)+"%"}
                </span>
            )
        },
        {
            field: "action",
            headerName: "Action",
            width: 120,
            renderCell: (params) => (
                <>
                    <Link to={"/product/" + params.row.id}>
                        <button className="userListEdit">Buy</button>
                    </Link>
                </>
            ),
        },
    ];

    useEffect( () => {
        async function getData(){
            const response = await apiGet("coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
            setData(response)
        }
        getData()
    }, [])

    return (
        <div className="productList">
            <DataGrid
                className="userListDataGrid"
                rows={data}
                columns={columns}
                pageSize={20}
                rowsPerPageOptions={[5]}
                disableSelectionOnClick
            />
        </div>
    );
}
