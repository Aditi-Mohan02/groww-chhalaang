import DataTable from "../../components/dataTable/DataTable";
import { users } from "../../data";
import "./users.scss";
import { GridColDef, GridRenderCellParams, GridTreeNodeWithRender } from "@mui/x-data-grid";
import { CssBaseline, FormControl, Grid, InputLabel, MenuItem, Paper, Select, ThemeProvider, createTheme } from '@mui/material';
import { SetStateAction, useState } from "react";
import Dialog from '@mui/material/Dialog';

export const Users = () => {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  
  const [openModal, setOpenModal] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const handleCellClick = (cellValues: GridRenderCellParams<any, any, any, GridTreeNodeWithRender>) => {
    setModalContent(cellValues.value);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 100, },
    {
      field: "firstName",
      headerName: "Company Name",
      width: 300,
      renderCell: (cellValues) => (
        <div
          onClick={() => handleCellClick(cellValues)}
          style={{ cursor: 'pointer' }}
        >
          {cellValues.value}
        </div>
      ),
    },
    {
      field: "Market Price",
      headerName: "Market Price",
      width: 200,
      editable: true,
    },
    {
      field: "Close Price",
      headerName: "Close Price",
      width: 200,
      editable: true,
    },
    {
      field: "Market Cap",
      headerName: "Market Cap",
      width: 200,
      editable: true,
    },
    {
      field: "P/E Ratio",
      headerName: "P/E Ratio",
      width: 200,
      editable: true,
    },

  ];

  const [age, setAge] = useState('');

  const handleChange = (event: { target: { value: string; }; }) => {
    setAge(event.target.value as string);
  };

  return (
    <div className="users">
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper>
            <Grid container spacing={2}>
              <Grid item xs={3}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Industry</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Industry"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={3}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Index</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Industry"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={3}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Industry</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Industry"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper>     <DataTable columns={columns} rows={users} /></Paper>
        </Grid>
        <Dialog open={openModal} onClose={handleCloseModal}>
          <div>{modalContent}</div>
        </Dialog>
      </Grid>
      </ThemeProvider>
    </div>
  );
};
