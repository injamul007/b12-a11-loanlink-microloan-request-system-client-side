import MyContainer from "../../../components/Shared/MyContainer/MyContainer";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import { RiLogoutBoxRLine } from "react-icons/ri";
// import useRole from '../../../hooks/useRole'

const Profile = () => {
  const { user, logOutFunc, setUser } = useAuth();
  // const {role} = useRole()

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

  return (
    <MyContainer>
      <title>MicroLoan || Profile</title>
      <div className="flex justify-center items-center h-screen">
        <div className=" dark:bg-[#2b3138] shadow-lg rounded-2xl md:w-4/5 lg:w-3/5">
          <img
            alt="cover photo"
            src="https://i.ibb.co.com/JFCpXg3Y/profile-cover-img.png"
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
              {/* {role} */}
              Borrower
            </p>

            <p className="mt-2 text-xl font-medium text-gray-600 dark:text-white">
              User Id: {user?.uid}
            </p>
            <div className="w-full p-2 mt-4 rounded-lg">
              <div className="flex flex-wrap items-center justify-between text-sm text-gray-600 ">
                <p className="flex flex-col">
                  <span className="text-gray-600 dark:text-white">Name</span>
                  <span className="font-bold text-gray-600 dark:text-white">
                    {user?.displayName}
                  </span>
                </p>
                <p className="flex flex-col">
                  <span className="text-gray-600 dark:text-white">Email</span>
                  <span className="font-bold text-gray-600 dark:text-white">
                    {user?.email}
                  </span>
                </p>

                <div className="flex flex-col">
                  <button className="bg-[#4DA3FF]  px-10 py-1 rounded-lg text-white cursor-pointer hover:bg-primary dark:hover:bg-[#FFB703] block mb-1">
                    Update Profile
                  </button>
                  <button className="bg-[#4DA3FF] px-7 py-1 rounded-lg text-white cursor-pointer hover:bg-primary dark:hover:bg-[#FFB703] block mb-1">
                    Change Password
                  </button>
                  <button
                    onClick={handleLogout}
                    className="inline-flex justify-center items-center gap-2 bg-[#4DA3FF] hover:bg-primary cursor-pointer px-7 py-1 rounded-lg text-white font-bold dark:hover:bg-[#FFB703]"
                  >
                    <RiLogoutBoxRLine size={22} /> Logout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MyContainer>
  );
};

export default Profile;
