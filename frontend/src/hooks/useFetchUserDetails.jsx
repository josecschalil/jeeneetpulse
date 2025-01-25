import { useState } from "react";
import axios from "axios";
import useTokenRefresh from "./useTokenRefresh";

const useFetchUserDetails = () => {
  const [userDetails, setUserDetails] = useState(null);
  const { refreshToken } = useTokenRefresh();

  const fetchUserDetails = async () => {
    try {
      const token = localStorage.getItem("access_token");
      if (!token) throw new Error("Access token not found");

      const response = await axios.get("http://127.0.0.1:8000/api/user", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data)
      setUserDetails(response.data); // Now stores all user details
    } catch (error) {
      if (error.response && error.response.status === 401) {
        const newToken = await refreshToken();
        if (newToken) {
          fetchUserDetails();
        }
      } else {
        console.error("Failed to fetch user details:", error);
      }
    }
  };

  return { userDetails, fetchUserDetails };
};

export default useFetchUserDetails;
