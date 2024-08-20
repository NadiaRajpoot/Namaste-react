import { useContext } from "react";
import { CDN_URL } from "../../Utils/Constants";
import { TiStar } from "react-icons/ti";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../../Utils/cartSlice";
import ShowButtonContext from "../../Utils/ShowButtonContext";
import { MdDelete } from "react-icons/md";

const ItemList = ({
  items,
  incrementItemCount,
  dncrementItemCount,
  itemCount,
}) => {
  // Get the showButton value from ShowButtonContext
  const { showButton } = useContext(ShowButtonContext);
  const dispatch = useDispatch(); // Redux dispatch for adding/removing items from the cart

  // Function to handle adding an item to the cart
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
   console.log(items)

  // Function to handle deleting an item from the cart
  const handleDeleteItem = () => {
    dispatch(removeItem());
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.name} // Unique key for each item
          className="border-gray-200 p-2 m-2 border-b-2 text-left md:flex md:justify-between"
        >
          <div className="py-2 w-full md:w-6/12">
            {/* Item name */}
            <span className="font-semibold text-sm md:text-base text-gray-700">
              {item.card.info.name}
            </span>

            {/* Item price */}
            <h2 className="font-semibold text-sm md:text-base text-gray-800 md:pb-2">
              ₹
              {!showButton
                ? item.card.info.defaultPrice
                  ? (item.card.info.defaultPrice / 100) * itemCount
                  : (item.card.info.price / 100) * itemCount
                : item.card.info.defaultPrice
                ? item.card.info.defaultPrice / 100
                : item.card.info.price / 100}
            </h2>

            {/* Item ratings */}
            {item.card.info.ratings.aggregatedRating.rating && (
              <p className="flex text-sm font-semibold text-red-600">
                <TiStar className="text-lg text-red-600" />
                {item.card.info.ratings.aggregatedRating.rating}
                <span className="text-gray-500 font-semibold">
                  ({item.card.info.ratings.aggregatedRating.ratingCountV2})
                </span>
              </p>
            )}

            {/* Item description */}
            <div className="flex">
              <p className="text-sm flex-col w-full md:w-11/12 my-2 flex">
                {item?.card?.info?.description? item?.card?.info?.description.slice(0, 100) + "..." :""}
              </p>
            </div>

            {/* Controls for item count and deletion */}
            {!showButton && (
              <div>
                <div className="flex items-center gap-2">
                  <div
                    disabled={itemCount === 0}
                    onClick={dncrementItemCount}
                    className="bg-red-500 h-6 w-6 text-center pb-4 text-white"
                  >
                    -
                  </div>
                  <span>{itemCount}</span>
                  <div
                    onClick={incrementItemCount}
                    className="bg-red-500 h-6 w-6 text-center pb-4 text-white"
                  >
                    +
                  </div>
                  <div
                    onClick={() => {
                      handleDeleteItem();
                    }}
                  >
                    <MdDelete size={26} />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Item image and ADD button */}
          <div className="relative flex items-center justify-center">
            <img
              src= {`${item.card.info.imageId ? CDN_URL + item.card.info.imageId : "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/be2600bef67fba98cb9bad18c40f9080" } `}
              alt="image"
              className="relative w-40 h-36 object-cover rounded-2xl mb-8 xl:mb-8 md:m-0"
            />
            {showButton && (
              <button
                onClick={() => {
                  handleAddItem(item);
                }}
                className="w-24 bg-white ring-1 rounded-lg p-2
                absolute z-6 top-28 md:top-32 font-bold
                text-red-600 ring-gray-400 shadow-md text-medium hover:bg-gray-300 hover:text-black"
              >
                ADD
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
