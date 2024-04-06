import "./dataTable.scss";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";

const darkTheme = createTheme({
  palette: {
    mode: "light",
  },
});

type Props = {
  columns: GridColDef[];
  rows: object[];
};

const handleRowDoubleClick = () => {
  {
    window.open('http://localhost:5173/overview', '_blank');
  }}



const DataTable = (props: Props) => {

  return (
    <div className="dataTable">
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <DataGrid
          className="dataGrid"
          rows={props.rows}
          columns={[...props.columns]}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          slots={{
            toolbar: GridToolbar,
          }}
          slotProps={{
            toolbar: {
              showQuickFilter: true,
              quickFilterProps: { debounceMs: 500 },
            },
          }}
          disableColumnFilter
          disableDensitySelector
          disableColumnSelector
          onRowDoubleClick={handleRowDoubleClick}
        />
      </ThemeProvider>
    </div>
  );
};

export default DataTable;
