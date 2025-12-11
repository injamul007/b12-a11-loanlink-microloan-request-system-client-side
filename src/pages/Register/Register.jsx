import React, { useState } from "react";
import MyContainer from "../../components/Shared/MyContainer/MyContainer";
import { FaEye } from "react-icons/fa6";
import { IoEyeOff } from "react-icons/io5";
import { Link, Navigate } from "react-router";
import Swal from "sweetalert2";
import SocialLogin from "../../components/Shared/SocialLogin/SocialLogin";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { imageUpload } from "../../utills";
import { TbFidgetSpinner } from "react-icons/tb";
import registerPageImg from "../../assets/register_page_image.png"

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const DEFAULT_AVATAR =
    "https://i.ibb.co.com/HLPwdmsS/User-Profile-PNG-Picture.png";

  const {
    // user,
    // setUser,
    // setLoading,
    loading,
    createUserFunc,
    updateUserProfileFunc,
    // logOutFunc,
  } = useAuth();

  // if (user) {
  //   return <Navigate to={"/"}></Navigate>;
  // }

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const handleRegister = async (data) => {
    try {
      const { name, image, 
        // role,
         email, password } = data;
      const imageFile = image?.[0] ?? null;

      //? client side image upload validation validation
      if (imageFile) {
        const validTypes = [
          "image/jpeg",
          "image/png",
          "image/webp",
          "image/jpg",
        ];
        if (!validTypes.includes(imageFile.type)) {
          toast.error("Only JPG / PNG / WEBP / JPEG allowed");
          return;
        }
        if (imageFile.size > 2 * 1024 * 1024) {
          toast.error("Max image size is 2 MB");
          return;
        }
      }

      //2. User Registration
      const result = await createUserFunc(email, password);
      console.log(result.user);

      let imageURL = DEFAULT_AVATAR;

      if (imageFile) {
        imageURL = (await imageUpload(imageFile)) || DEFAULT_AVATAR;
      }

      //3. Save username & profile photo
      await updateUserProfileFunc(name, imageURL);
      // console.log(result.user);

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Register Successfully",
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
    <div className="flex items-center justify-center bg-linear-to-br from-[#0B5FFF] to-[#1d232a] dark:bg-linear-to-br dark:from-[#1d232a] dark:to-[#1d232a]">
      <title>MicroLoan || Register</title>
      <MyContainer>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 p-6 lg:p-10 text-white">
          {/* Left section */}
          <div className="max-w-lg text-center lg:text-left">
            <img
              src={registerPageImg}
              alt="registerPageImg"
            />
          </div>

          {/* Register card */}
          <div className="w-full max-w-md backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-7">
            <form onSubmit={handleSubmit(handleRegister)} className="space-y-3">
              <h2 className="text-2xl font-semibold mb-2 text-center text-white">
                Register Here!
              </h2>
              <p className="mt-4 text-center text-sm text-white/80 leading-relaxed">
                To join our MicroLoan community and Explore exclusive Loans and
                Apply for Loans.
              </p>

              {/* Name */}
              <div>
                <label className="block text-sm font-medium">Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  {...register("name", {
                    required: { value: true, message: "Name is required" },
                    maxLength: {
                      value: 20,
                      message: "Maximum Length below 20 characters",
                    },
                  })}
                  className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
                {errors.name?.message && (
                  <p className="text-error text-xs font-bold">{errors.name.message}</p>
                )}
              </div>
              {/* Image */}
              <div>
                <label
                  htmlFor="image"
                  className="block mb-2 text-sm font-medium"
                >
                  Profile Image
                </label>
                <input
                  name="image"
                  type="file"
                  id="image"
                  accept="image/*"
                  className="block w-full text-sm text-gray-200
      file:mr-4 file:py-2 file:px-4
      file:rounded-md file:border-0
      file:text-sm file:font-semibold
      file:bg-lime-50 file:text-primary
      hover:file:bg-blue-100
      bg-white/20
       border border-dashed border-accent rounded-md cursor-pointer
      focus:outline-none focus:ring-2 focus:ring-secondary focus:border-accent
      py-2"
                  {...register("image", {
                    validate: (files) => {
                      if (!files || files.length === 0) return true;
                      const file = files[0];
                      const validTypes = [
                        "image/jpeg",
                        "image/jpg",
                        "image/png",
                        "image/webp",
                      ];
                      if (!validTypes.includes(file.type))
                        return "Only JPG/PNG/WebP allowed";
                      if (file.size > 2 * 1024 * 1024) return "Max 2 MB";
                      return true;
                    },
                  })}
                />
                {errors.image?.message && (
                  <p className="text-error text-xs font-bold">{errors.image.message}</p>
                )}
                <p className="mt-1 text-xs text-gray-400">
                  PNG, JPG, WEBP or JPEG (max 2MB)
                </p>
              </div>

              {/* Role */}
              <div className="space-y-1 text-sm">
                <label htmlFor="category" className="block">
                  Select Role
                </label>
                <select
                  className="w-full px-4 py-2.5 rounded-md bg-white/20 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  {...register("role", {
                    required: { value: true, message: "Role is Required" },
                  })}
                >
                  <option disabled className="text-gray-500" value={""}>
                    Select Role
                  </option>
                  <option className="text-gray-500" value="borrower">
                    borrower
                  </option>
                  <option className="text-gray-500" value="manager">
                    manager
                  </option>
                </select>
                {errors.role?.message && (
                  <p className="text-error text-xs font-bold">{errors.role.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm">Email</label>
                <input
                  type="email"
                  placeholder="example@email.com"
                  className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  {...register("email", {
                    required: { value: true, message: "Email is required" },
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Valid Email Required",
                    },
                  })}
                />
                {errors.email?.message && (
                  <p className="text-error text-xs font-bold">{errors.email.message}</p>
                )}
              </div>

              <div className="relative">
                <label className="block text-sm">Password</label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Your Password"
                  className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  {...register("password", {
                    required: { value: true, message: "Password is required" },
                    pattern: {
                      value:
                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-={}[\]:;"'<>,.?/]).{8,}$/,
                      message:
                        "Password must be at least one uppercase,lowercase,special character and minimum 8 character",
                    },
                  })}
                />
                {errors.password?.message && (
                  <p className="text-error text-xs font-bold">
                    {errors.password.message}
                  </p>
                )}
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-2 top-8 cursor-pointer z-50"
                >
                  {showPassword ? <FaEye /> : <IoEyeOff />}
                </span>
              </div>

              <button
                type="submit"
                className="my-btn w-full cursor-pointer active:scale-105 mt-2"
              >
              {loading ? (
                <TbFidgetSpinner className="animate-spin m-auto" />
              ) : (
                "Register"
              )}
              </button>

              {/* Divider */}
              <div className="flex items-center justify-center gap-2">
                <div className="h-px w-16 bg-white/30"></div>
                <span className="text-sm text-white/70">or continue</span>
                <div className="h-px w-16 bg-white/30"></div>
              </div>

              {/* Google Signin */}
              <SocialLogin></SocialLogin>

              <p className="text-center text-sm text-white/80 mt-3">
                Already have an account? Please{" "}
                <Link
                  to="/login"
                  className="text-secondary dark:text-[#FFB703] hover:text-white underline"
                >
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default Register;
