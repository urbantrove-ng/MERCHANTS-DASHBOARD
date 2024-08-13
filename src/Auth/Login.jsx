import { useRef, useState } from "react";
import axios from "../Api/axios";
import { useAuth } from "../context/AuthContext";
import Spinner from "../components/Spinner";
import { Link, useNavigate } from "react-router-dom";
function Login() {
  const [email, setEmail] = useState("");
  const [errMsg, SetErrMsg] = useState("");

  const { setAuth } = useAuth();
  const errRef = useRef();
  const navigate = useNavigate();
  const [logining, setLogining] = useState(false);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const LOGIN_URL = "/auth/signin";
  const onHandleSubmit = async (e) => {
    e.preventDefault();
    setLogining(true);
    try {
      const response = await axios.post(
        LOGIN_URL,

        JSON.stringify({ email, password }),

        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      if (response.data.code === 200 && response?.data?.data.role !== "user") {
        setAuth({
          ...response.data.data,
          accessToken: response.data.data.accessToken,
        });
        navigate("/");
      } else if (response?.data?.data.role === "user") {
        throw new Error("Unauthorized user.");
      }
    } catch (err) {
      if (err.response) {
        const status = err.response.status;
        if (status === 401 || status === 404) {
          SetErrMsg(err?.response?.data?.data?.msg || "An error occurred.");
        } else {
          SetErrMsg("An unexpected error occurred.");
        }
      } else {
        SetErrMsg(err.message || "An error occurred.");
      }
    } finally {
      setLogining(false);
    }
  };

  return (
    <section className="bg-[#FEFAFA] h-[100vh]  shadow-md ">
      <section className="flex justify-center  h-full text-black items-center w-full font-Montserrat   bg-[#FEFAFA] ">
        <div className="flex flex-col items-center w-full max-w-md p-4 bg-[#FEFAFA]  rounded ">
          <h3 className="text-center text-[3.2rem] font-bold mb-6">Sign In</h3>
          <form
            className="flex flex-col gap-4 items-center  bg-[#FEFAFA]   "
            onSubmit={onHandleSubmit}
          >
            <p
              ref={errRef}
              className={
                errMsg ? "errmsg text-red-500 text-center" : "offscreen"
              }
              aria-live="assertive"
            >
              {errMsg}
            </p>
            <div className="flex flex-col">
              <label htmlFor="email" className="mb-1">
                Email<span className="text-red-500">*</span>
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address..."
                id="email"
                type="email"
                className="outline-none border-b-2 p-2 lg:w-[400px] w-[300px]"
              />
            </div>
            <div className="flex flex-col relative">
              <label htmlFor="password" className="mb-1">
                Password
              </label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="***********"
                id="password"
                type={showPassword ? "text" : "password"}
                className="outline-none border-b-2 p-2 lg:w-[400px] w-[300px]"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 bottom-2"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            <div className="w-full flex justify-end">
              <p
                className="underline cursor-pointer"
                onClick={() => navigate("/forgotpassword")}
              >
                Forgot password?
              </p>
            </div>{" "}
            <div className="flex gap-6 items-center mt-6">
              <button className=" bg-primaryOne lg:h-[40px] flex justify-center text-white items-center rounded-md lg:w-40 w-28 h-12 text-center  cursor-pointer drop-shadow-lg hover:scale-105 transition ease-in-out duration-200">
                {!logining ? "Sign In" : <Spinner />}
              </button>
              <Link to="/Auth/Signup">
                <button className=" text-black hover:underline lg:h-[40px] flex justify-center items-center">
                  Sign Up &rarr;
                </button>
              </Link>
            </div>
          </form>
        </div>
      </section>
    </section>
  );
}

export default Login;
