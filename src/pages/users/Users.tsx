import DataTable from "../../components/dataTable/DataTable";
import { users } from "../../data";
import "./users.scss";
import { GridColDef } from "@mui/x-data-grid";

export const Users = () => {
  const columns: GridColDef[] = [
    // { field: "id", headerName: "ID", width: 90 },
    {
      field: "avatar",
      headerName: "Avatar",
      width: 100,
      renderCell: (params) => {
        return <img src={params.row.img || "/noavatar.png"} alt="" />;
      },
    },
    {
      field: "firstName",
      headerName: "First name",
      width: 150,     
      renderCell: (cellValues) => {
        return (
          <div
            onClick={() => {
              window.open('https://example.com', '_blank');
            }}
            style={{ cursor: 'pointer' }}
          >
            {cellValues.value}
          </div>
        )
      }
    },
    {
      field: "lastName",
      headerName: "Last name",
      width: 150,    
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,       
    },
    {
      field: "phone",
      headerName: "Phone",
      width: 200,       
    },
    {
      field: "createdAt",
      headerName: "Created At",
      width: 200,       
    },
    {
      field: "verified",
      headerName: "Verified",
      width: 150,
      type: "boolean",
    },
  ];

  return (
    <div className="users">
      <div className="info">
        <h1>{`Today's Market Movers`}</h1>
      </div>
      <DataTable columns={columns} rows={users} />
    </div>
  );
};
