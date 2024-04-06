import { Grid } from "@mui/material";
import CandlestickChart from "./CandlestickChart";
import HeaderBanner from "../../components/headerBanner/HeaderBanner";

const StockOverview = () => {

    const stockData = {
        marketCap: '₹ 6,601 Cr',
        stockPE: 26.4,
        roce: 18.4,
        roe: 14.7,
        currentPrice: 407,
        highLow: { high: 614, low: 192 },
        bookValue: 123,
        dividendYield: 0.20,
        faceValue: 10,
        about: 'Sandur Manganese & Iron Ores (SMIORE) is involved in mining of low phosphorous manganese and iron ore in the Hospet-Ballari region of Karnataka.'
      };
    
      return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
            <HeaderBanner
            marketCap={stockData.marketCap}
            stockPE={stockData.stockPE}
            roce={stockData.roce}
            roe={stockData.roe}
            currentPrice={stockData.currentPrice}
            highLow={stockData.highLow}
            bookValue={stockData.bookValue}
            dividendYield={stockData.dividendYield}
            faceValue={stockData.faceValue}
            // about={stockData.about} // Pass the about data to the HeaderBanner
      />
        </Grid>
            <Grid item xs={12}>
        <CandlestickChart title={"ICICI"} />
        </Grid>
        </Grid>
      );
}

export default StockOverview;