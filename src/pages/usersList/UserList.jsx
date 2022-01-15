import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import "./userList.css";

export default function UserList() {
  const [data, setData] = useState(userRows);
  const columns = [
    { field: "id", headerName: "ID", width: 20 },
    {
      field: "user",
      headerName: "User",
      width: 160,
      renderCell: (params) => (
        <div className="userListUser">
          <img src={params.row.avatar} alt="user" />
          {params.row.username}
        </div>
      ),
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
    },
    {
      field: "status",
      headerName: "Status",
      width: 110,
    },
    {
      field: "transaction",
      headerName: "Transaction",
      width: 110,
    },
    {
      field: "action",
      headerName: "Action",
      width: 120,
      renderCell: (params) => (
        <>
          <Link to={"/user/" + params.row.id}>
            <button className="userListEdit">Edit</button>
          </Link>
          <DeleteOutline
            className="userListDelete"
            onClick={() => handleDelete(params.row.id)}
          />
        </>
      ),
    },
  ];

  function handleDelete(id){
    setData(data.filter(item => item.id !== id))
  }

  return (
    <div className="userList">
      <DataGrid
      style={{backgroundColor: 'white'}}
        rows={data}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
