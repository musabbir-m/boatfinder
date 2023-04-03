import { updateEmail } from "firebase/auth";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useFetcher, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signUp, updateUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [signupError, setSignupError] = useState("");
  
  const handleSignup = (data) => {
    console.log(data);
    setSignupError("");
    signUp(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast("User Created Successfully");
        const userInfo = { displayName: data.name };
        updateUser(userInfo)
          .then(() => {})
          .catch((err) => {});

        saveUser(data.name, data.email, data.role);

        navigate("/");
      })
      .catch((err) => setSignupError(err.message));
  };

  const saveUser = (name, email, role) => {
    const user = { name, email, role, verified: "false" };
    fetch("https://boatfinder-server.vercel.app/user", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div className="card-body">
          <form onSubmit={handleSubmit(handleSignup)} action="">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder=""
                className="input input-bordered"
                {...register("name", { required: "Please insert your name" })}
              />
              {errors.name && (
                <p className="text-red-400">{errors.name.message}</p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
                {...register("email", { required: "Please insert your email" })}
              />
              {errors.email && (
                <p className="text-red-400">{errors.email.message}</p>
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
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && (
                <p className="text-red-400">{errors.password.message}</p>
              )}
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text font-bold">
                  Select Your User-type
                </span>
              </label>
              <select className="select select-bordered" {...register("role")}>
                <option value="buyer">Buyer</option>
                <option value="seller">Seller</option>
              </select>
            </div>
            {signupError && <p className="text-red-400">{signupError}</p>}
            <div className="form-control mt-6">
              <button
                type="submit"
                className="px-4 py-3 bg-orange-500 text-white hover:bg-orange-400"
              >
                Signup
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
