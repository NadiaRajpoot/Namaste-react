
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../Utils/useRestaurantMenu";
import RestaurantCatagory from "./RestaurantCatagory";
import { MdStars } from "react-icons/md";
import { MdDeliveryDining } from "react-icons/md";
const RestaurantMenu = () => {
  const resId = useParams();

  const menuInfo = useRestaurantMenu(resId);

  if (menuInfo === null) return <Shimmer />;

  const {
    name,
    totalRatingsString,
    avgRatingString,
    areaName,
    sla,
    feeDetails,
  } = menuInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    menuInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

  const catagories =
    menuInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (menuInfo.length=== 0) ? <Shimmer/>: (
    <>
      <div className=" lg:w-8/12 md:w-8/12 w-10/12  m-auto mt-14">
        <h1 className="font-extrabold mb-2 mt-6  md:text-2xl text-lg">
          {name}
        </h1>

        <div className=" w-full border rounded-2xl border-gray-300 p-4">
          <div className="flex gap-1 font-semibold ">
            <MdStars size={20} color="red" />
            <span>{avgRatingString}</span>
            <span>({totalRatingsString})</span>
          </div>
          <div className="flex my-2 gap-1 mb-2">
            <div>
              <div className="w-2 h-2 rounded-full bg-gray-400"></div>
              <div className="w-[1px] h-7  bg-gray-400 ml-1"></div>
              <div className="w-2 h-2 rounded-full bg-gray-400"></div>
            </div>
            <div>
              <div className="text-sm  flex gap-1 mb-2">
                <span className="font-semibold">Outlet</span>
                <span className="text-gray-400">{areaName}</span>
              </div>
              <div className="text-sm font-semibold">
                <span>{sla.minDeliveryTime}</span>
                <span>- {sla.maxDeliveryTime} mins</span>
              </div>
            </div>
          </div>
          <hr />
          <div className="flex items-center gap-2 text-gray-400 mt-2">
            <MdDeliveryDining className="h-5 w-5" />
            <div className="flex gap-1 items-center">
              <span className="text-sm ">{sla.lastMileTravelString}s</span>
              <span className="text-sm ">{feeDetails.message.slice(15)}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        {catagories.map((catagory) => {
          return <RestaurantCatagory key={ catagory.card.card.title}data={catagory?.card?.card} />;
        })}
      </div>
    </>
  );
};

export default RestaurantMenu;
