import React, { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const Login = () => {
  const { login } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [error, setError] = useState("");

  const handleLogin = (data) => {
    setError("");
    login(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        const currentUser = { email: user.email };

        fetch("https://boatfinder-server.vercel.app/jwt", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data, "hello");
            localStorage.setItem("boatfinderToken", data.token);
            toast("logged in successfully");
            navigate(from, { replace: true });
          });
      })

      .catch((err) => setError(err.message));
  };
  return (
    <div className="hero min-h-screen flex flex-col md:flex-row  justify-center gap-5 bg-base-200">
      {/* demo accounts */}
      <div>
        <h2 className="text-2xl">Please try these accounts <br /> to check authorization</h2>
        <div className="w-86 mt-3 font-semibold bg-blue-500 p-3 rounded-md text-white">

          <p>Buyer: mnew@gmail.com</p>
          <p>Seller: musabbir04@gmail.com</p> 
          <p>Admin: bbc@gmail.com</p>
          <br />
          <p className="">Password for all: <span className="text-red-300">123456</span></p>
          

        </div>

          
      </div>
      {/* demo account ends */}

      <div className=" flex-shrink-0 card w-full max-w-sm shadow-2xl bg-base-100">

      
        <div className="card-body">
        
          <form onSubmit={handleSubmit(handleLogin)} action="">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
                {...register("email", { required: "Please give your email" })}
              />
              {errors.email && (
                <p className="text-red-500" role="alert">
                  {errors.email?.message}
                </p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input input-bordered"
                {...register("password", { required: "Please set a password" })}
              />
              {errors.password && (
                <p className="text-red-500" role="alert">
                  {errors.password?.message}
                </p>
              )}
            </div>
            <p>
              Don't have an account?{" "}
              <Link to="/signup" className="link">
                Register
              </Link>{" "}
            </p>
            <div className="form-control mt-6">
              <button
                type="submit"
                className="px-4 py-3 bg-orange-500 text-white hover:bg-orange-400"
              >
                Login
              </button>
            </div>
            {error && <p>{error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
