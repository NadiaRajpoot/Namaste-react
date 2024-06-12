import { CDN_URL } from "../../Utils/Constants";

const RestaurantCard = (props) => {
  const { cloudinaryImageId, name, cuisines, areaName, avgRating, sla } =
    props.resData;

  return (
    <div className="card">
      <div className="img-container">
        <img src={CDN_URL + cloudinaryImageId} alt="image" />
      </div>

      <div className="card-content">
        <div className="Card-content-top">
          <h3>{name}</h3>
          <span>
            {" "}
            <i class="fa-solid fa-star"></i> {avgRating}{" "}
          </span>
        </div>

        <div className="card-subcontent">
          <h5>{cuisines.join(", ")}</h5>
          <h5>{areaName}</h5>
        </div>

        <div className="card-content-bottom">
          <h5>
            <i class="fa-solid fa-truck"></i>
            <span> {sla.deliveryTime} minutes</span>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
