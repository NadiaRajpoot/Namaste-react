import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Body from "./Body";
import "./index.css";
import About from "./About";
import Error from "./Error";
import Cart from "./Cart"
import RestaurantMenu from "./RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import HorizontalMenuItems from "./HorizontalMenuItems";
import appStore from "../../Utils/appStore";
import {Provider} from "react-redux"
import ShowButtonContext from "../../Utils/ShowButtonContext";
import Offers from "./Offers";
import Footer from "./Footer";
import Help from "./Help";
const AppLayout = () => {
  const [showButton , setShowButton] = useState(false);
  const value = {showButton ,setShowButton}
  return (
    
    <Provider store = {appStore}>
      <ShowButtonContext.Provider value= {value}>
    <div className="app">
      <Header />
      <Outlet />
      <Footer/>
    </div>
    </ShowButtonContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      
      {
        path: "/offers",
        element:<Offers/>,
      },
      {
        path: "/help",
        element:<Help/>,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/offers/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/collections/:resMenuId",
        element: <HorizontalMenuItems/>
      },
      {
        path: "/cart",
        element: <Cart/>
      },
    ],

    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
