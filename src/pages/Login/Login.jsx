import React, { useState } from "react";
import { Link,  } from "react-router";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import MyContainer from "../../components/Shared/MyContainer/MyContainer";
import Swal from "sweetalert2";
// import useAuth from "../../hook/useAuth";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  // const location = useLocation();
  // const navigate = useNavigate();

  // const { setUser, setLoading, loginUserFunc, googleSignInFunc } = useAuth();

  // const handleLogin = (e) => {
  //   e.preventDefault();
  //   const email = e.target.email.value;
  //   const password = e.target.password.value;

  //   loginUserFunc(email, password)
  //     .then((result) => {
  //       const userData = result.user;
  //       setLoading(false);
  //       setUser(userData);
  //       Swal.fire({
  //         position: "top-end",
  //         icon: "success",
  //         title: "Login Successfully",
  //         showConfirmButton: false,
  //         timer: 1500,
  //         customClass: {
  //           popup: "small-swal-popup",
  //         },
  //       });
  //       e.target.reset();
  //       navigate(`${location.state ? location.state : "/"}`);
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

  // const handleGoogleSignin = () => {
  //   googleSignInFunc()
  //     .then((result) => {
  //       const userData = result.user;
  //       setLoading(false);
  //       setUser(userData);
  //       Swal.fire({
  //         position: "top-end",
  //         icon: "success",
  //         title: "Google Login Successful",
  //         showConfirmButton: false,
  //         timer: 1500,
  //         customClass: {
  //           popup: "small-swal-popup",
  //         },
  //       });
  //       navigate(`${location.state ? location.state : "/"}`);
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
    <div className="flex items-center justify-center bg-linear-to-br from-[#4DA3FF] to-[#0B5FFF] dark:bg-linear-to-br dark:from-[#1d232a] dark:to-[#1d232a]">
      <title>MicroLoan || Login</title>
      <MyContainer>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 p-6 lg:p-10 text-white">
          {/* Left section */}
          <div className="max-w-lg text-center lg:text-left">
            <img src={"https://i.ibb.co.com/Gfb7Sdj0/loan-related-image.png"} alt="" />
          </div>

          {/* Login card */}
          <div className="w-full max-w-md backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-8 relative z-50">
            <form 
            // onSubmit={handleLogin}
             className="space-y-[18px]">
              <h2 className="text-2xl font-semibold mb-2 text-center text-white">
                Login Now!
              </h2>
              <p className="mt-4 text-sm text-white text-center">
              for continue your Loan borrowing journey. Manage your account, to apply for
              loans and more.
            </p>

              <div>
                <label className="block text-sm mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  // ref={emailRef}
                  // value={email}
                  // onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="example@email.com"
                  className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                />
              </div>

              <div className="relative">
                <label className="block text-sm mb-1">Password</label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Your Password"
                  className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                />
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
                Login
              </button>

              {/* Divider */}
              <div className="flex items-center justify-center gap-2 my-2">
                <div className="h-px w-16 bg-white/30"></div>
                <span className="text-sm text-white/70">or continue</span>
                <div className="h-px w-16 bg-white/30"></div>
              </div>

              {/* Google Signin */}
              <button
                type="button"
                // onClick={handleGoogleSignin}
                className="flex items-center justify-center gap-3 bg-white text-gray-800 px-5 py-2 rounded-lg w-full font-semibold hover:bg-gray-200 transition-colors cursor-pointer"
              >
                <img
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  alt="google"
                  className="w-5 h-5"
                />
                Login with Google
              </button>

              <p className="text-center text-sm text-white/80 mt-3">
                New to our Website? Please{" "}
                <Link
                  to="/register"
                  className="text-emerald-900 hover:text-white underline"
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
