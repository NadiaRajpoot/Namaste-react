import { useRouteError } from "react-router-dom"; // Importing the useRouteError hook to access route errors
import errorpage from "../../assets/Error-404.png"; // Importing the error image to display on the error page

const Error = () => {
  const err = useRouteError(); // Getting the error object from the route

  return (
    <div className="flex flex-col justify-center p-10 mt-20 items-center">
      {/* Container for the error page content */}

      <h2 className="font-extrabold text-xl flex flex-col justify-center text-center items-center">
        Oops! Something went wrong!
      </h2>
      {/* Main error message */}

      <h3 className="p-2">{err.data}</h3>
      {/* Displaying specific error details from the error object */}

      <img
        className="w-96 h-96 object-cover"
        src={errorpage}
        alt="Error page"
      />
      {/* Error image to visually represent the error */}
    </div>
  );
};

export default Error; // Exporting the Error component for use in other parts of the application
