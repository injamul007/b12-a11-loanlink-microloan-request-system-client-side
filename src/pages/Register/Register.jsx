import React, { useState } from "react";
import MyContainer from "../../components/Shared/MyContainer/MyContainer";
import { FaEye } from "react-icons/fa6";
import { IoEyeOff } from "react-icons/io5";
import { Link, Navigate } from "react-router";
import Swal from "sweetalert2";
// import useAuth from "../../hook/useAuth";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  // const {
  //   user,
  //   setUser,
  //   setLoading,
  //   createUserFunc,
  //   updateProfileFunc,
  //   googleSignInFunc,
  // } = useAuth();

  // if (user) {
  //   return <Navigate to={"/"}></Navigate>;
  // }

  // const handleRegister = (e) => {
  //   e.preventDefault();
  //   const form = e.target;
  //   const displayName = form.name.value;
  //   const photoURL = form.photo.value;
  //   const email = form.email.value;
  //   const password = form.password.value;

  //   const passwordPattern =
  //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}:;<>,.?~|/-]).{6,}$/;

  //   if (!passwordPattern.test(password)) {
  //     toast.error(
  //       "Password must be at least 6 characters long, include one uppercase letter, one lowercase letter, and one special character."
  //     );
  //     return;
  //   }

  //   createUserFunc(email, password)
  //     .then((result) => {
  //       const userData = result.user;
  //       updateProfileFunc(displayName, photoURL)
  //         .then(() => {
  //           setLoading(false);
  //           setUser(userData);
  //           Swal.fire({
  //             position: "top-end",
  //             icon: "success",
  //             title: "Register Successfully",
  //             showConfirmButton: false,
  //             timer: 1500,
  //             customClass: {
  //               popup: "small-swal-popup",
  //             },
  //           });
  //           e.target.reset();
  //         })
  //         .catch((error) => {
  //           toast.error(error.message);
  //         });
  //     })
  //     .catch((error) => {
  //       if (error.code === "auth/invalid-credential") {
  //         toast.error("Invalid credential. Please try again.");
  //       } else if (error.code === "auth/email-already-in-use") {
  //         toast.error(
  //           "This email is already registered. Try logging in instead."
  //         );
  //       } else if (error.code === "auth/weak-password") {
  //         toast.error("Password must be at least 6 characters long.");
  //       } else if (error.code === "auth/user-not-found") {
  //         toast.error("No account found with this email.");
  //       } else if (error.code === "auth/wrong-password") {
  //         toast.error("Incorrect password. Please try again.");
  //       } else if (error.code === "auth/invalid-email") {
  //         toast.error("Invalid email format. Please check your email.");
  //       } else if (error.code === "auth/missing-email") {
  //         toast.error("Email is required. Please enter your email.");
  //       } else if (error.code === "auth/missing-password") {
  //         toast.error("Password is required. Please enter your password.");
  //       } else if (error.code === "auth/too-many-requests") {
  //         toast.error("Too many login attempts. Please try again later.");
  //       } else if (error.code === "auth/user-disabled") {
  //         toast.error("This account has been disabled. Contact support.");
  //       } else if (error.code === "auth/operation-not-allowed") {
  //         toast.error("Email/password accounts are not enabled.");
  //       } else if (error.code === "auth/popup-closed-by-user") {
  //         toast.error("Popup closed before completing sign-in.");
  //       } else if (error.code === "auth/cancelled-popup-request") {
  //         toast.error("Sign-in popup was closed or canceled.");
  //       } else if (
  //         error.code === "auth/account-exists-with-different-credential"
  //       ) {
  //         toast.error(
  //           "An account already exists with the same email but different sign-in method."
  //         );
  //       } else if (error.code === "auth/invalid-verification-code") {
  //         toast.error("Invalid verification code. Please try again.");
  //       } else if (error.code === "auth/invalid-verification-id") {
  //         toast.error("Invalid verification ID. Please try again.");
  //       } else if (error.code === "auth/network-request-failed") {
  //         toast.error("Network error. Please check your internet connection.");
  //       } else if (error.code === "auth/requires-recent-login") {
  //         toast.error("Please log in again to complete this action.");
  //       } else if (error.code === "auth/credential-already-in-use") {
  //         toast.error("This credential is already linked to another user.");
  //       } else if (error.code === "auth/invalid-action-code") {
  //         toast.error("The action code is invalid or expired.");
  //       } else {
  //         toast.error("Something went wrong. Please try again.");
  //       }
  //     });
  // };

  // const handleGoogleSignUp = () => {
  //   googleSignInFunc()
  //     .then((result) => {
  //       const userData = result.user;
  //       setLoading(false);
  //       setUser(userData);
  //       Swal.fire({
  //         position: "top-end",
  //         icon: "success",
  //         title: "Google Sign Up Successful",
  //         showConfirmButton: false,
  //         timer: 1500,
  //         customClass: {
  //           popup: "small-swal-popup",
  //         },
  //       });
  //     })
  //     .catch((error) => {
  //       if (error.code === "auth/invalid-credential") {
  //         toast.error("Invalid credential. Please try again.");
  //       } else if (error.code === "auth/email-already-in-use") {
  //         toast.error(
  //           "This email is already registered. Try logging in instead."
  //         );
  //       } else if (error.code === "auth/weak-password") {
  //         toast.error("Password must be at least 6 characters long.");
  //       } else if (error.code === "auth/user-not-found") {
  //         toast.error("No account found with this email.");
  //       } else if (error.code === "auth/wrong-password") {
  //         toast.error("Incorrect password. Please try again.");
  //       } else if (error.code === "auth/invalid-email") {
  //         toast.error("Invalid email format. Please check your email.");
  //       } else if (error.code === "auth/missing-email") {
  //         toast.error("Email is required. Please enter your email.");
  //       } else if (error.code === "auth/missing-password") {
  //         toast.error("Password is required. Please enter your password.");
  //       } else if (error.code === "auth/too-many-requests") {
  //         toast.error("Too many login attempts. Please try again later.");
  //       } else if (error.code === "auth/user-disabled") {
  //         toast.error("This account has been disabled. Contact support.");
  //       } else if (error.code === "auth/operation-not-allowed") {
  //         toast.error("Email/password accounts are not enabled.");
  //       } else if (error.code === "auth/popup-closed-by-user") {
  //         toast.error("Popup closed before completing sign-in.");
  //       } else if (error.code === "auth/cancelled-popup-request") {
  //         toast.error("Sign-in popup was closed or canceled.");
  //       } else if (
  //         error.code === "auth/account-exists-with-different-credential"
  //       ) {
  //         toast.error(
  //           "An account already exists with the same email but different sign-in method."
  //         );
  //       } else if (error.code === "auth/invalid-verification-code") {
  //         toast.error("Invalid verification code. Please try again.");
  //       } else if (error.code === "auth/invalid-verification-id") {
  //         toast.error("Invalid verification ID. Please try again.");
  //       } else if (error.code === "auth/network-request-failed") {
  //         toast.error("Network error. Please check your internet connection.");
  //       } else if (error.code === "auth/requires-recent-login") {
  //         toast.error("Please log in again to complete this action.");
  //       } else if (error.code === "auth/credential-already-in-use") {
  //         toast.error("This credential is already linked to another user.");
  //       } else if (error.code === "auth/invalid-action-code") {
  //         toast.error("The action code is invalid or expired.");
  //       } else {
  //         toast.error("Something went wrong. Please try again.");
  //       }
  //     });
  // };

  return (
    <div className="flex items-center justify-center bg-linear-to-br from-[#0B5FFF] to-[#1d232a] dark:bg-linear-to-br dark:from-[#1d232a] dark:to-[#1d232a]">
      <title>MicroLoan || Register</title>
      <MyContainer>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 p-6 lg:p-10 text-white">
          {/* Left section */}
          <div className="max-w-lg text-center lg:text-left">
            <img src="https://i.ibb.co.com/4RmM0P9r/regiter-page-loans-pic.png" alt="" />
          </div>

          {/* Register card */}
          <div className="w-full max-w-md backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-7">
            <form 
            // onSubmit={handleRegister}
             className="space-y-3">
              <h2 className="text-2xl font-semibold mb-2 text-center text-white">
                Register Here!
              </h2>
              <p className="mt-4 text-center text-sm text-white/80 leading-relaxed">
              To join our MicroLoan community and Explore exclusive Loans and Apply for Loans.
            </p>

              <div>
                <label className="block text-sm font-medium">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">PhotoURL</label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Your photo URL here"
                  className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>

              <div>
                <label className="block text-sm">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="example@email.com"
                  className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>

              <div className="relative">
                <label className="block text-sm">Password</label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Your Password"
                  className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-2 top-8 cursor-pointer z-50"
                >
                  {showPassword ? <FaEye /> : <IoEyeOff />}
                </span>
              </div>

              <button
                type="submit"
                className="my-btn w-full cursor-pointer active:scale-105"
              >
                Register
              </button>

              {/* Divider */}
              <div className="flex items-center justify-center gap-2">
                <div className="h-px w-16 bg-white/30"></div>
                <span className="text-sm text-white/70">or continue</span>
                <div className="h-px w-16 bg-white/30"></div>
              </div>

              {/* Google Signin */}
              <button
                type="button"
                // onClick={handleGoogleSignUp}
                className="flex items-center justify-center gap-3 bg-white text-gray-800 px-5 py-2 rounded-lg w-full font-semibold hover:bg-gray-200 transition-colors cursor-pointer"
              >
                <img
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  alt="google"
                  className="w-5 h-5"
                />
                Sign up with Google
              </button>

              <p className="text-center text-sm text-white/80 mt-3">
                Already have an account? Please{" "}
                <Link
                  to="/login"
                  className="text-emerald-900 hover:text-white underline"
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
