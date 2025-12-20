import MyContainer from "../../../components/Shared/MyContainer/MyContainer";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import { RiLogoutBoxRLine } from "react-icons/ri";
import profileCoverImg from "../../../assets/user_cover_img.png";
import managerCoverImg from "../../../assets/manager_cover.jpg";
import adminCoverImg from "../../../assets/admin_cover.jpg";
import useRole from "../../../hooks/useRole";
import SpinnerForDashboardRoute from "../../../components/Shared/SpinnerForDashboardRoute/SpinnerForDashboardRoute";

const Profile = () => {
  const { user, logOutFunc, setUser } = useAuth();
  const {role, isRoleLoading} = useRole();

  const handleLogout = async () => {
    try {
      await logOutFunc();
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "LogOut Successful",
        showConfirmButton: false,
        timer: 1500,
        customClass: {
          popup: "small-swal-popup",
        },
      });
      setUser(null);
    } catch (err) {
      console.error(err);
    }
  };

  if(isRoleLoading) return <SpinnerForDashboardRoute></SpinnerForDashboardRoute>
  return (
    <div className="py-12 px-18">
      <MyContainer>
        <title>MicroLoan || Profile</title>
        <div className="flex justify-center items-center h-screen">
          <div className=" dark:bg-[#2b3138] shadow-lg rounded-2xl max-w-2xl mx-auto">
            <img
              alt="cover photo"
              src={role === 'admin' ? adminCoverImg : role === 'manager' ? managerCoverImg : profileCoverImg}
              className="w-full mb-4 rounded-t-lg h-56"
            />
            <div className="flex flex-col items-center justify-center p-4 -mt-16">
              <a href="#" className="relative block">
                <img
                  alt="profile"
                  src={user?.photoURL}
                  className="mx-auto object-cover rounded-full h-24 w-24  border-2 border-white "
                />
              </a>

              <p className="p-2 px-4 text-xs text-white bg-primary rounded-full">
                {role}
              </p>

              <p className="mt-2 lg:text-xl inline-flex flex-wrap font-medium text-gray-600 dark:text-white">
                User Id: {user?.uid}
              </p>
              <div className="w-full p-2 mt-4 rounded-lg">
                <div className="grid lg:grid-cols-2 text-sm text-gray-600 ">
                  <p className="flex flex-col mb-4">
                    <span className="text-gray-600 dark:text-white">Name</span>
                    <span className="font-bold text-gray-600 dark:text-white">
                      {user?.displayName}
                    </span>
                  </p>
                  <p className="flex flex-col mb-4">
                    <span className="text-gray-600 dark:text-white">Email</span>
                    <span className="font-bold text-gray-600 dark:text-white">
                      {user?.email}
                    </span>
                  </p>
                </div>
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
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default Profile;
