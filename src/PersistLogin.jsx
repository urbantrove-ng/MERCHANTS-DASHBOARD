import useRefreshToken from "./hooks/useRefreshToken";
import { useState, useEffect } from "react";
import { useAuth } from "./context/AuthContext";
import loader from "./assets/logo.png";
function PersistLogin({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  const refresh = useRefreshToken();
  const { auth } = useAuth();

  useEffect(() => {
    const verifyRefreshToken = async () => {
      try {
        await refresh();
      } catch (error) {
        // console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    if (!auth?.accessToken) {
      verifyRefreshToken();
    } else {
      setIsLoading(false);
    }
  }, [auth, refresh]);

  useEffect(() => {
    if (!isLoading && !auth?.accessToken) {
      // console.log("hello");
    }
  }, [isLoading, auth]);

  return (
    <>
      {isLoading ? (
        <div className=" bg-white rounded-full flex justify-center items-center h-[100vh] w-full">
          <div className=" flex flex-col items-center">
            <img src={loader} className=" w-40 h-20  pulse " />
          </div>
        </div>
      ) : (
        children
      )}
    </>
  );
}

export default PersistLogin;
