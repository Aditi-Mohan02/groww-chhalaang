import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import CandlestickChart from "./CandlestickChart";
import HeaderBanner from "../../components/headerBanner/HeaderBanner";
import PeersDataGrid from "../../components/peersDataGrid/PeersDataGrid";
import ShareHoldingPatternChart from "../../components/shareHoldingPatternChart/ShareHoldingPatternChart";
import FinancialChartTabs from "../../components/financialChartTabs/FinancialChartTabs";
import { apiresponse } from "../../data";
import { useParams } from "react-router-dom";
import axios from 'axios';

const StockOverview = () => {
  const [stockDetails, setStockDetails] = useState<IStockDetails | null>(null);
  const { id } = useParams();
  console.log(id)

  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:8090/top/stocks');
            setStockDetails( response.data ?? apiresponse as unknown as IStockDetails);
        } catch (error) {
            console.log(error)
          }
    };

    fetchData();
  }, []); 

  return (
    <Grid container spacing={2} pt={2}>
      {stockDetails && (
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
      )}
    </Grid>
  );
};

export default StockOverview;
