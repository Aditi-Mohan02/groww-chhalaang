import { Users } from "../users/Users";
import TopBox from "../../components/topBox/TopBox";
import "./home.scss";

export const Home = () => {
  return (
    <div className="home">
      <div className="box box1">
        <TopBox title="Gainers"/>
      </div>
      <div className="box box1">
        <TopBox title={"Loosers"} />
      </div>
      <div className="box box1">
        <TopBox title={"Most Traded"} />
      </div>
      <div className="box box1">
        <TopBox title={"52 Week High"} />
      </div>
       <div className="box box1">
        <Users  />
      </div>
      {/* <div className="box box3">
        <ChartBox {...chartBoxProduct} />
      </div>
      <div className="box box4">
        <PieChartBox />
      </div>
      <div className="box box5">
        <ChartBox {...chartBoxConversion} />
      </div>
      <div className="box box6">
        <ChartBox {...chartBoxRevenue} />
      </div>
      <div className="box box7">
        <AreaChartBox />
      </div>
      <div className="box box8">
        <BarChartBox {...barChartBoxVisit} />
      </div>
      <div className="box box9">
        <BarChartBox {...barChartBoxRevenue} />
      </div>  */}
    </div>
  );
};
