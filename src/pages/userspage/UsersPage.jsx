import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline, Edit } from "@mui/icons-material";
import { Link } from "react-router-dom";

import "./UsersPage.css";
import { userRows as rows } from "../../dummydata/dummydata";

function UsersPage(props) {
  const [data, setData] = useState(rows);
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 90,
      description: "This column has ID by date account was made.",
    },
    {
      field: "username",
      headerName: "Name",
      width: 200,
      description: "This column has Full Name of User.",
    },
    {
      field: "avatar",
      headerName: "Avatar",
      width: 70,
      sortable: false,
      description: "This column has User's Profile Photo.",
      renderCell: (params) => {
        return (
          <div className="userpageUser">
            <img src={params.row.avatar} alt="" className="userpageImage" />
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
      description: "This column has Email of User.",
    },
    {
      field: "status",
      headerName: "Status",
      width: 90,
      description: "This column indicated if User's account is still active.",
    },
    { field: "transaction", headerName: "Transaction", width: 120 },
    {
      field: "action",
      headerName: "Action",
      description: "This column lets you edit and delete user.",
      sortable: false,
      width: 160,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.id}>
              <button className="userpageEdit">
                <Edit />
              </button>
            </Link>
            <button
              className="userpageDelete"
              onClick={() => handleDelete(params.row.id)}
            >
              <DeleteOutline />
            </button>
          </>
        );
      },
    },
  ];

  return (
    <div
      className="userspage"
      style={{
        height: 400,
        width: "100%",
      }}
    >
      <div style={{ display: "flex", height: "100%" }}>
        <div style={{ flexGrow: 1 }}>
          <DataGrid
            rows={data}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            disableSelectionOnClick
          />
        </div>
      </div>
    </div>
  );
}

export default UsersPage;
