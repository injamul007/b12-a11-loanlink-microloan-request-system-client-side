import MyContainer from "../../../components/Shared/MyContainer/MyContainer";
import useAuth from "../../../hooks/useAuth";
import useRole from "../../../hooks/useRole";
import SpinnerForDashboardRoute from "../../../components/Shared/SpinnerForDashboardRoute/SpinnerForDashboardRoute";
import { RiLogoutBoxRLine } from "react-icons/ri";
import Swal from "sweetalert2";
import profileCoverImg from "../../../assets/user_cover_img.png";
import managerCoverImg from "../../../assets/manager_cover.jpg";
import adminCoverImg from "../../../assets/admin_cover.jpg";

const Profile = () => {
  const { user, logOutFunc, setUser } = useAuth();
  const { role, isRoleLoading } = useRole();

  const handleLogout = async () => {
    await logOutFunc();
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "LogOut Successful",
      showConfirmButton: false,
      timer: 2000,
      customClass: {
        popup: "small-swal-popup",
      },
    });
    setUser(null);
  };

  if (isRoleLoading) return <SpinnerForDashboardRoute />;

  return (
    <MyContainer>
      <title>LoanLink || My Profile</title>
      <div className="bg-base-200 dark:bg-[#2b3138] rounded-2xl shadow-md overflow-hidden mt-8 mb-8 md:mt-12 md:mb-12 lg:mt-22">
        {/* Cover */}
        <div className="relative md:h-12 lg:h-30">
          <img
            alt="cover photo"
            src={
              role === "admin"
                ? adminCoverImg
                : role === "manager"
                ? managerCoverImg
                : profileCoverImg
            }
            className=" mb-4 rounded-t-lg object-cover"
          />
        </div>

        {/* Profile Info */}
        <div className="relative px-6 pb-6 md:mt-2 mt-0">
          <img
            src={user?.photoURL}
            className="w-24 h-24 rounded-full border-4 border-white absolute -top-12"
          />

          <div className="pt-14 flex flex-col md:flex-row md:justify-between pb-6">
            <div>
              <h2 className="text-2xl text-gray-600 md:text-gray-200 dark:text-white font-bold">
                {user?.displayName}
              </h2>
              <p className="text-gray-600 md:text-gray-200 dark:text-white text-sm">
                {role === "admin"
                  ? "Admin of LoanLink Management System"
                  : role === "manager"
                  ? "Manager of LoanLink Management System"
                  : "I am a Borrower"}
              </p>
              <p className="text-gray-600 md:text-gray-200 dark:text-white text-sm">
                Email: {user?.email}
              </p>
            </div>

            <div className="mt-2 md:mt-0 lg:mb-0 md:mb-0 mb-2">
              <span className="text-sm font-semibold text-gray-600 md:text-gray-200 dark:text-white">
                Current role
              </span>
              <div className="mt-1 px-4 py-1 bg-[#4DA3FF] rounded-full text-sm font-bold text-center text-black">
                {role}
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div>
            <div className="grid lg:grid-cols-3 gap-2">
              <div>
                <button className="bg-[#4DA3FF] font-bold  px-10 py-2 rounded-lg text-white cursor-pointer hover:bg-primary dark:hover:bg-[#FFB703] w-full block mb-1 duration-300">
                  Update Profile
                </button>
              </div>
              <div>
                <button className="bg-[#4DA3FF] px-7 py-2 rounded-lg text-white cursor-pointer hover:bg-primary font-bold dark:hover:bg-[#FFB703] w-full block mb-1 duration-300">
                  Change Password
                </button>
              </div>
              <div>
                <button
                  onClick={handleLogout}
                  className="inline-flex justify-center items-center gap-2 bg-[#4DA3FF] hover:bg-primary cursor-pointer px-7 py-2 w-full rounded-lg text-white duration-300 font-bold dark:hover:bg-[#FFB703]"
                >
                  <RiLogoutBoxRLine size={20} /> Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MyContainer>
  );
};

export default Profile;
