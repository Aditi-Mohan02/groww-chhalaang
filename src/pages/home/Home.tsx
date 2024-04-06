import { Users } from "../users/Users";
import TopBox from "../../components/topBox/TopBox";
import "./home.scss";

export const Home = () => {
  return (
    <>
    <div className="home">
      <div className="box box1">
        <TopBox title="Gainers" />
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
    </div>
    <Users />
    </>

  );
};
