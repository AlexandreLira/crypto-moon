import { DeleteOutline } from "@mui/icons-material";
import { DataGrid } from "@mui/x-data-grid";
import {
    format,
} from "date-fns";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ProductRows } from "../../dummyData";
import "./productList.css";

export default function ProductList() {
    const [data, setData] = useState(ProductRows);
    const columns = [
        { field: "id", headerName: "ID", width: 70, edit: false },
        {
            field: "user",
            headerName: "User",
            width: 300,
            renderCell: (params) => (
                <div className="productListProduct">
                    <img src={params.row.avatar} alt="user" />
                    {params.row.username}
                </div>
            ),
        },
        {
            field: "category",
            headerName: "Category",
            width: 150,
        },
        {
            field: "date",
            headerName: "Date",
            width: 150,
            renderCell: (params) => (
                    <span>{format(params.row.date, "dd/MM/yyyy")}</span>
            ),
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
                    <Link to={"/product/" + params.row.id}>
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

    function handleDelete(id) {
        setData(data.filter((item) => item.id !== id));
    }
    return (
        <div className="productList">
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
