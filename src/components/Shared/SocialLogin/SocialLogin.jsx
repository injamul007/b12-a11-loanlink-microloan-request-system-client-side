import React from "react";
import toast from "react-hot-toast";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";

const SocialLogin = () => {
  const { signInWithGoogleFunc } = useAuth();

  // Handle Google Signin
  const handleGoogleSignIn = async () => {
    try {
      //User Registration using google
      const result = await signInWithGoogleFunc();
      console.log(result.user);

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
    } catch (err) {
      console.log(err);
      console.log(err?.response?.data?.message);
      toast.error(err?.message);
      toast.error(err?.response?.data?.message);
    }
  };

  return (
    <div>
      {/* Google Signin */}
      <button
        type="button"
        onClick={handleGoogleSignIn}
        className="flex items-center justify-center gap-3 bg-white text-gray-800 px-5 py-2 rounded-lg w-full font-semibold hover:bg-gray-200 transition-colors cursor-pointer"
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
