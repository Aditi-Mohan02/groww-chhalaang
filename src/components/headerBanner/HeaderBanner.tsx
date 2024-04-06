import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

interface RatioProps {
  marketCap: string;
  stockPE: number;
  roce: number;
  roe: number;
  currentPrice: number;
  highLow: { high: number; low: number };
  bookValue: number;
  dividendYield: number;
  faceValue: number;
}

const HeaderBanner: React.FC<RatioProps> = ({
  marketCap,
  stockPE,
  roce,
  roe,
  currentPrice,
  highLow,
  bookValue,
  dividendYield,
  faceValue,
}) => {
  return (
    <Card variant="outlined" >
      <Grid container p={2}>
        <Grid item xs={12}>
        <Typography variant="h5" component="div">
          Sandur Manganese & Iron Ores Ltd
        </Typography>
        </Grid>
        {/* <Grid item xs={12}> */}
            <Grid container  item xs={8} spacing={2} sx={{ border: '1px solid gray', borderRadius: '4px', padding: '16px', margin: '8px' }}>
          <Grid item xs={12} md={6}>
            <Typography color="text.secondary">Market Cap</Typography>
            <Typography>{marketCap}</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography color="text.secondary">Stock P/E</Typography>
            <Typography>{stockPE}</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography color="text.secondary">ROCE</Typography>
            <Typography>{`${roce}%`}</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography color="text.secondary">ROE</Typography>
            <Typography>{`${roe}%`}</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography color="text.secondary">Current Price</Typography>
            <Typography>{`₹${currentPrice}`}</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography color="text.secondary">High / Low</Typography>
            <Typography>{`₹${highLow.high} / ₹${highLow.low}`}</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography color="text.secondary">Book Value</Typography>
            <Typography>{`₹${bookValue}`}</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography color="text.secondary">Dividend Yield</Typography>
            <Typography>{`${dividendYield}%`}</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography color="text.secondary">Face Value</Typography>
            <Typography>{`₹${faceValue}`}</Typography>
          </Grid>
        {/* </Grid>  */}
        </Grid>                                                                                                                                                                                                      
      </Grid>
    </Card>
  );
};

export default HeaderBanner;
