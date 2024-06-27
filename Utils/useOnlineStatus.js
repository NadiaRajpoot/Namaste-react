import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStaus, setOnlineStatus] = useState(true);

  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });

    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });
  }, []);

  return onlineStaus;
};

export default useOnlineStatus;
