import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import "./userList.css";
import { apiGet } from "../../services/api";

export default function UserList() {
  const [data, setData] = useState([]);

  useEffect( () => {
    async function getData(){
        const response = await apiGet("coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
        setData(response)
    }
    getData()
}, [])

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

  function handleDelete(id){
    setData(data.filter(item => item.id !== id))
  }

  return (
    <div className="userList">
      <div className="userListTitleContainer">
        <h1 className="userListTitle">Users</h1>
      </div>
      <DataGrid
        className="userListDataGrid"
        rows={data}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
