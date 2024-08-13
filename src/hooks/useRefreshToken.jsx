import axios from "../Api/axios";
import { useAuth } from "../context/AuthContext";
const useRefreshToken = () => {
  const { setAuth } = useAuth();

  const refresh = async () => {
    const response = await axios.get("/auth/refresh", {
      withCredentials: true,
    });
    setAuth((prev) => {
      return {
        ...response.data.data,
        accessToken: response.data.data.accessToken,
      };
    });

    return response.data.accessToken;
  };

  return refresh;
};
export default useRefreshToken;
