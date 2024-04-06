import { DataGrid } from '@mui/x-data-grid';
import { Box, Typography, Paper } from '@mui/material';

const EnhancedDataGrid = ({ rows, columns }) => {
  return (
    <Box sx={{
      p: 2, // Padding around the Box
      display: 'flex',
      flexDirection: 'column',
      gap: 2, // Space between elements
      alignItems: 'center', // Align items in the center for a neat look
      '& .MuiTypography-root': { // Apply styles directly to Typography within this Box
        fontWeight: 'bold',
        color: 'primary.main', // Use the primary color from the theme
      },
      '& .MuiDataGrid-root': { // Style the DataGrid
        backgroundColor: 'background.paper', // Use paper background for contrast
        borderColor: 'divider', // Border color from the theme for the DataGrid
        '& .MuiDataGrid-columnHeaders': {
          color: 'common.black', // White text for contrast
          fontSize: '1rem', // Larger font size for headers
        },
        '& .MuiDataGrid-cell': {
          color: 'text.secondary', // Secondary text color for cell content
        },
      },
    }}>
      <Typography variant="h6">Compare fundamentals with peers</Typography>
      <Paper elevation={3} sx={{ height: 500, width: '100%', overflow: 'hidden' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          disableSelectionOnClick
          sx={{
            border: 2,
            borderColor: 'primary.main',
            '.MuiDataGrid-columnSeparator': {
              display: 'none',
            },
            '& .MuiDataGrid-columnHeaderTitle': {
              fontWeight: 'bold', // Make column titles bold
            },
          }}
        />
      </Paper>
    </Box>
  );
};

export default EnhancedDataGrid;
