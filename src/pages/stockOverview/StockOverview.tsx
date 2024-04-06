import { Grid } from "@mui/material";
import CandlestickChart from "./CandlestickChart";
import HeaderBanner from "../../components/headerBanner/HeaderBanner";
import { useEffect, useState } from "react";
import { apiresponse } from "../../data";
import PeersDataGrid from "../../components/peersDataGrid/PeersDataGrid";
import ShareHoldingPatternChart from "../../components/shareHoldingPatternChart/ShareHoldingPatternChart";
import FinancialChartTabs from "../../components/financialChartTabs/FinancialChartTabs";
import Navbar from "../../components/navbar/Navbar";

const StockOverview = () => {

   const [stockDetails, getStockDetails] = useState<IStockDetails|null>(null);

   useEffect(()=>{
    const fetchData = () =>{
        getStockDetails(apiresponse as unknown as IStockDetails)
    }
    fetchData();
   })
    
      return (
        <div>
        <Navbar />
        <Grid container spacing={2} pt={2}>
               {stockDetails &&
            <>
                      <Grid item xs={12}>

                          <HeaderBanner stockDetails={stockDetails} />

                      </Grid>
                      <Grid item xs={12}>
                          <CandlestickChart title={stockDetails.details.fullName} />
                      </Grid>
                  <Grid item xs={6}>
                          <PeersDataGrid peerList={stockDetails.similarAssets.peerList} />

                      </Grid>
                      <Grid item xs={6}>
                      <FinancialChartTabs financialStatement={stockDetails.financialStatement} />

                      </Grid>
                      <Grid item xs={12}>
                        <ShareHoldingPatternChart shareHoldingPattern={stockDetails.shareHoldingPattern} />
                      </Grid>
                      </>
}
        </Grid>
        </div>
      );

}

export default StockOverview;