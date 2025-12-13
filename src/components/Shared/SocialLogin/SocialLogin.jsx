import React from "react";
import toast from "react-hot-toast";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router";

const SocialLogin = () => {
  const { signInWithGoogleFunc, setLoading } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state ? location.state : "/";

  // Handle Google Signin
  const handleGoogleSignIn = async () => {
    try {
      //User Registration using google
      const result = await signInWithGoogleFunc();
      console.log(result.user);

      navigate(from, { replace: true });

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Google Login Successful",
        showConfirmButton: false,
        timer: 2000,
        customClass: {
          popup: "small-swal-popup",
        },
      });

      // const userData = {
      //   name: result.user?.displayName,
      //   email: result.user?.email,
      //   photo: result.user?.photoURL,
      // }

      // await saveOrUpdateUser(userData);
    } catch (error) {
      console.log(error);
      console.log(error?.response?.data?.message);
      // toast.error(err?.message);
      // toast.error(err?.response?.data?.message);
      if (error.code === "auth/popup-closed-by-user") {
        toast.error("Sign-in popup was closed before completion.");
      } else if (error.code === "auth/cancelled-popup-request") {
        toast.error("Sign-in popup was cancelled.");
      } else if (
        error.code === "auth/account-exists-with-different-credential"
      ) {
        toast.error(
          "An account already exists with this email using a different sign-in method."
        );
      } else if (error.code === "auth/credential-already-in-use") {
        toast.error("This account is already linked with another user.");
      } else if (error.code === "auth/operation-not-allowed") {
        toast.error("This sign-in method is currently disabled.");
      } else if (error.code === "auth/network-request-failed") {
        toast.error("Network error. Please check your internet connection.");
      } else {
        toast.error("Social login failed. Please try again.");
      }
    } finally {
      setLoading(false)
    }
  };

  return (
    <div>
      {/* Google Signin */}
      <button
        type="button"
        onClick={handleGoogleSignIn}
        className="flex items-center justify-center gap-3 bg-white text-gray-800 px-5 py-2 rounded-lg w-full font-semibold hover:bg-gray-300 transition-colors cursor-pointer"
      >
        <img
          src="https://www.svgrepo.com/show/475656/google-color.svg"
          alt="google"
          className="w-5 h-5"
        />
        Sign up with Google
      </button>
    </div>
  );
};

export default SocialLogin;
