import DataTable from "../../components/dataTable/DataTable";
import { users } from "../../data";
import "./users.scss";
import { GridColDef, GridRenderCellParams, GridTreeNodeWithRender } from "@mui/x-data-grid";
import { Button, CssBaseline, FormControl, Grid, InputLabel, MenuItem, Paper, Select, Slider, ThemeProvider, createTheme } from '@mui/material';
import { SetStateAction, useState } from "react";
import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';

function valuetext(value: number) {
  return `${value}°C`;
}

export const Users = () => {
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: '#0077B6', // Set your desired blue color here
      },
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
      editable: false,
    },
    {
      field: "Close Price",
      headerName: "Close Price",
      width: 200,
      editable: false,
    },
    {
      field: "Market Cap",
      headerName: "Market Cap",
      width: 200,
      editable: false,
    },
    {
      field: "P/E Ratio",
      headerName: "P/E Ratio",
      width: 200,
      editable: false,
    },

  ];

  const [age, setAge] = useState('');

  const handleChange = (event: { target: { value: string; }; }) => {
    setAge(event.target.value as string);
  };

  const [value, setValue] = useState<number[]>([20, 37]);

  const handleChangeSlider = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  return (
    <div className="users" style={{margin: 10}}>
      {/* <ThemeProvider style>
        <CssBaseline /> */}
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Paper style={{padding:20 , backgroundColor: '#e5f0f2'}} >
              <Grid container spacing={4}>
                <Grid item xs={4}>
                  <FormControl fullWidth >
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
                <Grid item xs={4}>
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
                <Grid item xs={4}>
                  <Typography id="input-slider" gutterBottom>
                    Volume
                  </Typography>
                  <Slider
                    getAriaLabel={() => 'Temperature range'}
                    value={value}
                    onChange={handleChangeSlider}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                  />
                </Grid>
                <Grid item xs={4}>
                  <Typography id="input-slider" gutterBottom>
                    Market Cap
                  </Typography>
                  <Slider
                    getAriaLabel={() => 'Temperature range'}
                    value={value}
                    onChange={handleChangeSlider}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                  />
                </Grid>
                <Grid item xs={4}>
                  <Typography id="input-slider" gutterBottom>
                    P/E Ratio
                  </Typography>
                  <Slider
                    getAriaLabel={() => 'Temperature range'}
                    value={value}
                    onChange={handleChangeSlider}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                  />
                </Grid>
                <Grid item xs={4}>
                  <Typography id="input-slider" gutterBottom>
                    Price
                  </Typography>
                  <Slider
                    getAriaLabel={() => 'Temperature range'}
                    value={value}
                    onChange={handleChangeSlider}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                  />
                </Grid>
                <Grid item style={{marginLeft: 700}}>
                <Button variant="contained" style={{marginRight: 10, minWidth : '140px', maxWidth: '140px', color: '#03045e',  borderColor: '#03045e', backgroundColor:'white'}}>Clear Filters</Button>
                <Button variant="contained" style={{ minWidth : '140px', maxWidth: '140px', backgroundColor: '#03045e'}}>Search</Button>
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
      {/* </ThemeProvider> */}
    </div>
  );
};
