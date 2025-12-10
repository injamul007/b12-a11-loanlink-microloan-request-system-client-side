import React, { useState } from "react";
import { Link } from "react-router";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import MyContainer from "../../components/Shared/MyContainer/MyContainer";
import Swal from "sweetalert2";
import SocialLogin from "../../components/Shared/SocialLogin/SocialLogin";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import { TbFidgetSpinner } from "react-icons/tb";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  // const location = useLocation();
  // const navigate = useNavigate();

  const { signInFunc, loading } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = async (data) => {
    try {
      const { email, password } = data;

      const result = await signInFunc(email, password);
      console.log(result.user);

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Login Successful",
        showConfirmButton: false,
        timer: 2000,
        customClass: {
          popup: "small-swal-popup",
        },
      });
    } catch (err) {
      console.log(err);
      console.log(err?.response?.data?.message);
      toast.error(err?.message);
      toast.error(err?.response?.data?.message);
    }
  };

  return (
    <div className="flex items-center justify-center bg-linear-to-br from-[#4DA3FF] to-[#0B5FFF] dark:bg-linear-to-br dark:from-[#1d232a] dark:to-[#1d232a]">
      <title>MicroLoan || Login</title>
      <MyContainer>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 p-6 lg:p-10 text-white">
          {/* Left section */}
          <div className="max-w-lg text-center lg:text-left">
            <img
              src={"https://i.ibb.co.com/Gfb7Sdj0/loan-related-image.png"}
              alt=""
            />
          </div>

          {/* Right section */}
          {/* Login card */}
          <div className="w-full max-w-md backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-8 relative z-50">
            <form
              onSubmit={handleSubmit(handleLogin)}
              className="space-y-[18px]"
            >
              <h2 className="text-2xl font-semibold mb-2 text-center text-white">
                Login Now!
              </h2>
              <p className="mt-4 text-sm text-white text-center">
                for continue your Loan borrowing journey. Manage your account,
                to apply for loans and more.
              </p>

              <div>
                <label className="block text-sm mb-1">Email</label>
                <input
                  type="email"
                  placeholder="example@email.com"
                  className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  {...register("email", {
                    required: { value: true, message: "Email is Required" },
                  })}
                />
                {errors?.email?.message && (
                  <p className="text-error text-xs font-bold">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div className="relative">
                <label className="block text-sm mb-1">Password</label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Your Password"
                  className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  {...register("password", {
                    required: { value: true, message: "Password is Required" },
                  })}
                />
                {errors?.password?.message && (
                  <p className="text-error text-xs font-bold">
                    {errors.password.message}
                  </p>
                )}
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-2 top-9 cursor-pointer z-50"
                >
                  {showPassword ? <FaEye /> : <IoEyeOff />}
                </span>
              </div>

              <button
                // onClick={handleResetPassword}
                className="hover:underline cursor-pointer text-xs"
                type="button"
              >
                Forget password?
              </button>

              <button
                type="submit"
                className="my-btn w-full cursor-pointer active:scale-105"
              >
                {loading ? (
                  <TbFidgetSpinner className="animate-spin m-auto" />
                ) : (
                  "Login"
                )}
              </button>

              {/* Divider */}
              <div className="flex items-center justify-center gap-2 my-2">
                <div className="h-px w-16 bg-white/30"></div>
                <span className="text-sm text-white/70">or continue</span>
                <div className="h-px w-16 bg-white/30"></div>
              </div>

              {/* Google Signin */}
              <SocialLogin></SocialLogin>

              <p className="text-center text-sm text-white/80 mt-3">
                New to our Website? Please{" "}
                <Link
                  to="/register"
                  className="text-accent dark:text-[#4DA3FF] hover:text-white underline"
                >
                  Register
                </Link>
              </p>
            </form>
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default Login;
