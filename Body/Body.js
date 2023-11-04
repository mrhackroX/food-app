import { dummyData } from "../Data/DummyData";
import ResCard from "./ResCard";
const Body = (props) => {
  return dummyData.map((item) => {
    return (
      <ResCard
        name={item.info.name}
        cuisine={item.info.cuisine[0].name}
        rating={item.info.rating.aggregate_rating}
        key={item.info.resId}
        imgUrl={item.info.image.url}
      />
    );
  });
};

export default Body;
