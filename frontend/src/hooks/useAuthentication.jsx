import { useState, useEffect } from "react";
import useFetchUserDetails from "./useFetchUserDetails";
import { usePathname } from "next/navigation"; // Import usePathname

const useAuthentication = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { userDetails, fetchUserDetails } = useFetchUserDetails();
  const pathname = usePathname(); // Get current pathname

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (token) {
      setIsAuthenticated(true);
      fetchUserDetails(); // Fetch complete user details
    } else {
      setIsAuthenticated(false);
    }
  }, [pathname]); // Dependency on pathname to trigger re-fetch on URL change

  return { isAuthenticated, userDetails };
};

export default useAuthentication;
