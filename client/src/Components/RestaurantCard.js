import { CDN_URL } from "../utils/constant";
const RestaurantCard = (props) => {
  const {
    name,
    cuisines,
    cloudinaryImageId,
    area,
    costForTwoString,
    avgRating,
    delieveryTime,
  } = props;
  return (
    <div className="res-card">
      <img
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
        className="res-logo"
      />
      <h3>{name}</h3>
      <div className="details-card">
        <span> {cuisines.join(", ")}</span>
        <span>{area}</span>
        <span>{avgRating}</span>
        <span>{costForTwoString}</span>
        <span>{delieveryTime}</span>
      </div>
    </div>
  );
};

export default RestaurantCard;
