import { useContext, useRef } from "react";
import "./login.css";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import { Muimodal } from "@mui/material/Modal";
import { CircularProgress } from "@mui/material";

const Login = () => {
  const email = useRef();
  const password = useRef();

  const { user, isFetching, error, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <h3 className="font-bowlby text-4xl text-pink">Cookedge</h3>
        <div className="loginLeft"></div>
        <div className="loginRight justify-center items-center mt-20">
          <form className="loginBox text-sm w-1/3 " onSubmit={handleClick}>
            <h2 className="text-center text-lg text-white font-bold">
              Sign up to your account
            </h2>
            <input
              placeholder="email"
              type="email"
              required
              className="loginInput masukLogin bg-transparent placeholder-white text-white"
              ref={email}
            />
            <input
              placeholder="Password"
              type="password"
              required
              className="loginInput bg-transparent placeholder-white text-white"
              ref={password}
            />
            <button className="loginButton text-md font-bold" type="submit">
              {isFetching ? "Loading" : "Log In"}
            </button>
            <div className="flex items-center justify-center">
              <span className="loginForgot mx-3">Forgot Password</span>
              <Link to="/register">
                <span className="loginRegisterButton hover:underline">
                  Sign Up
                </span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
