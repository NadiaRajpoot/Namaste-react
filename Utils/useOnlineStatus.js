import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  // State to track the online status
  const [onlineStatus, setOnlineStatus] = useState(true);

  // useEffect hook to set up event listeners when the component mounts
  useEffect(() => {
    // Event listener for when the browser goes offline
    const handleOffline = () => {
      setOnlineStatus(false);
    };

    // Event listener for when the browser goes online
    const handleOnline = () => {
      setOnlineStatus(true);
    };

    // Add event listeners for 'offline' and 'online' events
    window.addEventListener("offline", handleOffline);
    window.addEventListener("online", handleOnline);

    // Cleanup function to remove event listeners when the component unmounts
    return () => {
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("online", handleOnline);
    };
  }, []); // Empty dependency array ensures this runs once on mount

  // Return the current online status
  return onlineStatus;
};

export default useOnlineStatus;
